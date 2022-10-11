import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_TOURNAMENT } from '../utils/mutations';
import { QUERY_ME, QUERY_TOURNAMENTS } from '../utils/queries';

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