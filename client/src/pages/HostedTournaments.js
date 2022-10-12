import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_TOURNAMENTS} from '../utils/queries';
import { BsTrashFill } from "react-icons/bs";
import { useMutation } from '@apollo/client';
import { DELETE_TOURNAMENT } from '../utils/mutations';


const HostedTournaments = () => {
    const { loading, data, refetch } = useQuery(QUERY_TOURNAMENTS);
    const tournaments = data?.tournaments || []

    const [deleteTournament] = useMutation(DELETE_TOURNAMENT, {
        onCompleted: () => refetch(),
      });

    const handleDelete = (id) => {
        deleteTournament({ variables: { id } });
      };

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
                    <div key={tournament._id} className="card" >
                    <Link to={`/tournament/${tournament._id}`}><h3>{tournament.tournament_name}</h3></Link>
                    <p className=''>Tournament ID: {tournament._id}</p>
                    <button onClick={() => handleDelete(tournament._id)}><BsTrashFill/></button>
                </div>
                ))}
            </div>
          )}
        </main>
    );
}

export default HostedTournaments;