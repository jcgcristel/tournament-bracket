<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_TOURNAMENT } from "../utils/queries";

const Tournament = () => {  
    const { id: _id } = useParams();

    const { loading, data } = useQuery(QUERY_TOURNAMENT, {
        variables: { id: _id }
    });
   
    console.log(tournament);
    
    const tournament = data?.tournament || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    
=======
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_TOURNAMENT } from '../utils/queries'

const Tournament = (props) => {

    const { id: _id } = useParams();

    const { loading, data } = useQuery(QUERY_TOURNAMENT, {
        variables: { id: _id },
    });

    const tournament = data?.tournament || {};
    console.log(tournament)

>>>>>>> f4f409245fd3db885915d91ba94efb980577a729
    return (
        <main className="center-horizontal">
            <div className="container center-vertical container-header">
                <h2>{tournament.tournament_name}</h2>
<<<<<<< HEAD
                <p>ID: {tournament._id}</p>
=======
>>>>>>> f4f409245fd3db885915d91ba94efb980577a729
                <div className="line" />
            </div>
            <div className="tournament-container center-horizontal">
                <p>PLACEHOLDER TOURNAMENT</p>
                <div className="tournament-bracket">
                    <div className="match-set">
                        <div className="match">
                            <div className="team">
                                <p>Team 1</p>
                            </div>
                            <div className="team">
                                <p>Team 2</p>
                            </div>
                        </div>
                        <div className="match">
                            <div className="team">
                                <p>Team 3</p>
                            </div>
                            <div className="team">
                                <p>Team 4</p>
                            </div>
                        </div>
                        <div className="match">
                            <div className="team">
                                <p>Team 5</p>
                            </div>
                            <div className="team">
                                <p>Team 6</p>
                            </div>
                        </div>
                        <div className="match">
                            <div className="team">
                                <p>Team 7</p>
                            </div>
                            <div className="team">
                                <p>Team 8</p>
                            </div>
                        </div>
                    </div>
                    <div className="match-set">
                        <div className="match">
                            <div className="team">
                                <p>Team 1</p>
                            </div>
                            <div className="team">
                                <p>Team 3</p>
                            </div>
                        </div>
                        <div className="match">
                            <div className="team">
                                <p>Team 5</p>
                            </div>
                            <div className="team">
                                <p>Team 7</p>
                            </div>
                        </div>
                    </div>
                    <div className="match-set">
                        <div className="match">
                            <div className="team">
                                <p>Team 1</p>
                            </div>
                            <div className="team">
                                <p>Team 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Tournament;