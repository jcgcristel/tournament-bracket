import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_TOURNAMENT } from '../utils/mutations';
import { QUERY_ME, QUERY_TOURNAMENTS } from '../utils/queries'

const CreateTournament = () => {
    const [tournament_name, setName] = useState('')
    const [addTournament, { error }] = useMutation(ADD_TOURNAMENT,
        {
            update(cache, { data: { addTournament } }) {

                // could potentially not exist yet, so wrap in a try/catch
                try {
                    // update me array's cache
                    const { me } = cache.readQuery({ query: QUERY_ME });
                    cache.writeQuery({
                        query: QUERY_ME,
                        data: { me: { ...me, tournaments: [...me.tournaments, addTournament] } },
                    });
                } catch (e) {
                    console.warn("First tournament hosted by user!")
                }

                const { tournaments } = cache.readQuery({ query: QUERY_TOURNAMENTS });
                cache.writeQuery({
                    query: QUERY_TOURNAMENTS,
                    data: { tournaments: [addTournament, ...tournaments] },
                });

            }
        }
    )

    const [numOfInputs, setNumOfInputs] = useState(0)
    const [generatedInputs, setGeneratedInputs] = useState([]);

    const findNumOfInputs = (event) => {
        const numOfInputs = event.target.value;
        setNumOfInputs(numOfInputs);
        if (numOfInputs > 0) {
            const generateArrays = Array.from(Array(Number(event.target.value)).keys())
            setGeneratedInputs(generateArrays);
        } else {
            setGeneratedInputs([])
        }
    };

    const [teamName, setTeamName] = useState('');

    const handleInputChange = (event) => {
        if (event.target.value) {
            setTeamName(event.target.value);
        }
    };

    const addInputs = () => {
        return generatedInputs.map((input) => (
            <div>
                <label htmlFor='numOfInputs'>Team {input + 1} </label>
                <input type="text" className='team_name' name={`team_name${input + 1}`} onChange={handleInputChange} value={teamName}></input>
            </div>
        ))
        // console.log(generatedInputs)
        // if you're here to perceive, dont
        // return (
        //     <div>
        //         <div>
        //             <label htmlFor='numOfInputs'>Team 1 </label>
        //             <input type="text" className='team_name' name='team_name1' onChange={handleInputChange} value={teamName.team1}></input>
        //         </div>
        //         <div>
        //             <label htmlFor='numOfInputs'>Team 2 </label>
        //             <input type="text" className='team_name' name='team_name2' onChange={handleInputChange} value={teamName.team2}></input>
        //         </div>
        //         <div>
        //             <label htmlFor='numOfInputs'>Team 3 </label>
        //             <input type="text" className='team_name' name='team_name3' onChange={handleInputChange} value={teamName.team3}></input>
        //         </div>
        //         <div>
        //             <label htmlFor='numOfInputs'>Team 4 </label>
        //             <input type="text" className='team_name' name='team_name4' onChange={handleInputChange} value={teamName.team4}></input>
        //         </div>
        //     </div>
        // )

    }

    const handleChange = (event) => {
        if (event.target.value) {
            setName(event.target.value);
        }
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addTournament({
                variables: { tournament_name },
            });

            // clear form value
            setName('');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="center-horizontal">
            <div className="container center-vertical container-header">
                <h2>Create Tournament</h2>

                <div className="line" />
            </div>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="tournament_name">TOURNAMENT NAME</label>
                        <input type="text" id="tournament_name" name="tournament_name" placeholder="Enter tournament name." onChange={handleChange} value={tournament_name}></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='numOfInputs'>Number of Teams</label>
                        <select className='numOfTeams' id="numOfTeams" name="numOfInputs" value={numOfInputs} onChange={findNumOfInputs}>
                            <option value="" selected="selected"></option>
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="16">16</option>
                        </select>
                    </div>
                    <div className='input-group'>
                        {generatedInputs.length ? (
                            <div>
                                {addInputs()}
                            </div>
                        ) : null
                        }
                    </div>
                    <div className="center-horizontal">
                        <input type="submit" className="button" id="addTournament" value="+ Create"></input>
                    </div>
                    {error && <span className="ml-2">Something went wrong...</span>}
                </form>
            </div>
        </main>
    );
}

export default CreateTournament;