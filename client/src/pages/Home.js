const Home = () => {
    return (
        <div className="container">
            <form>
                <label htmlFor="tournamentId">Tournament ID<div className="line" /></label>
                <input type="text" id="tournamentId" name="tournamentId" placeholder="TOURNAMENT ID"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Home;