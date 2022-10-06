const Home = () => {
    return (
        <main className="center-horizontal">
            <div className="container">
                <p className="center-text">To view the event bracket, enter the Tournament ID provided by your organizer.</p>
                <div className="line" />
            </div>
            <div className="container">
                <form>
                    <label htmlFor="tournamentId">Tournament ID</label>
                    <input type="text" id="tournamentId" name="tournamentId" placeholder="Tournament ID"></input>
                    <div className="center-horizontal">
                        <input type="submit" className="button" value="Enter" id="findTournament"></input>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Home;