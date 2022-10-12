import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [tournament_ID, setName] = useState('')
    const handleChange = (event) => {
        if (event.target.value) {
            setName(event.target.value);
        }
    };

    const handleFormSubmit = async (event, thing) => {
        event.preventDefault();
        try {
            setName('');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="center-horizontal">
            <div className="container">
                <h2>Welcome to Tournament Bracket!</h2>
                <div className="line" />
            </div>
            <div className="container">
                <p className="center-text">To view the event bracket, enter the Tournament ID provided by your organizer.</p>
                <form onSubmit={handleFormSubmit(tournament_ID)}>
                    <input type="text" id="tournamentId" name="tournamentId" placeholder="Tournament ID" onChange={handleChange} value={tournament_ID}></input>
                    <div className="center-horizontal">
                        <Link to={`/tournament/${tournament_ID}`}><input type="submit" className="button" value="Enter" id="findTournament"></input></Link>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Home;