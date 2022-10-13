import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { BsTrashFill } from "react-icons/bs";
import { QUERY_ME, QUERY_TOURNAMENTS } from '../utils/queries'
// import { useMutation } from '@apollo/client';
// import { DELETE_TOURNAMENT } from '../utils/mutations';

const HostedTournaments = () => {
    const { loading, data } = useQuery(QUERY_TOURNAMENTS);
    const tournaments = data?.tournaments || []

    // const [deleteTournament] = useMutation(DELETE_TOURNAMENT, 
    //     {
    //         update(cache, { data: { deleteTournament } }) {
    //                 const { me } = cache.readQuery({ query: QUERY_ME });
    //                 cache.updateQuery({
    //                     query: QUERY_ME,
    //                     data: { me: { ...me, tournaments: [...me.tournaments, deleteTournament] } },
    //                 });

    //             const { tournaments } = cache.readQuery({ query: QUERY_TOURNAMENTS });
    //             cache.updateQuery({
    //                 query: QUERY_TOURNAMENTS,
    //                 data: { tournaments: [deleteTournament, ...tournaments] },
    //             });

    //         }
    //     });
    //
    // in delete async func
    // const handleDelete  = async (thing) => {
    //     await deleteTournament({
    //         variables: {
    //             _id: thing
    //         }
    //     });
    // }

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
                            <div 
                            // onClick={handleDelete (tournament._id)}
                            
                            className="center-vertical center-horizontal tournament-del">
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