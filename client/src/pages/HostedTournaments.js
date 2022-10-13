import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { BsTrashFill } from "react-icons/bs";
import { QUERY_TOURNAMENTS } from '../utils/queries'
import Auth from '../utils/auth';

const HostedTournaments = () => {
    const nameOfuser = Auth.getProfile().data.username
    const { loading, data } = useQuery(QUERY_TOURNAMENTS, {
        variables: { username: nameOfuser },
      });
    const tournaments = data?.tournaments || []

    if (!tournaments.length) {
        return (
            <main className="center-horizontal">
                <div className="container center-vertical container-header">
                    <h2>Hosted Tournaments</h2>
                    <Link to={`/create_tournament`}><button className="button" id="addTournament"><span>+</span> Create</button></Link>
                    <div className="line" />
                </div>
                <div className="container">
                    <div className="card">
                        <h3>No tournaments yet!</h3>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="center-horizontal">
            <div className="container center-vertical container-header">
                <h2>Hosted Tournaments</h2>
                <Link to={`/create_tournament`}><button className="button" id="addTournament"><span>+</span> Create</button></Link>
                <div className="line" />
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="container">
                    {tournaments && tournaments.map(tournament => (
                        <div className="tournament-card">
                            <Link to={`/tournament/${tournament._id}`} key={tournament._id} className="center-vertical tournament-info">
                                <h3>{tournament.tournament_name}</h3>
                                <p className=''>Tournament ID: {tournament._id}</p>
                            </Link>
                            <div className="center-vertical center-horizontal tournament-del">
                                <BsTrashFill />
                            </div>
                            {/* onClick={() => {console.log(tournament._id)}} */}
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default HostedTournaments;