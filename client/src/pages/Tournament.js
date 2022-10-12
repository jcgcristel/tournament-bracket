import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_TOURNAMENT } from '../utils/queries'

const Tournament = (props) => {

    // const { id: _id } = useParams();

    // const { loading, data } = useQuery(QUERY_TOURNAMENT, {
    //     variables: { id: _id },
    // });

    // const tournament = data?.tournament || {};
    // console.log(tournament)

    return (
        <main className="center-horizontal">
            <div className="container center-vertical container-header">
                <h2>sdsd</h2>
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