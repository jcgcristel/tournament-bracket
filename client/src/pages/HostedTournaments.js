const HostedTournaments = () => {
    return (
        <main className="center-horizontal">
            <div className="container center-vertical container-header">
                <h2>Hosted Tournaments</h2>
                <button className="button" id="addTournament"><span>+</span> Create</button>
                <div className="line" />
            </div>
            <div className="container">
                <div className="card">
                    <h3>Tournament Name 3</h3>
                    <p>Description</p>
                </div>
                <div className="card">
                    <h3>Tournament Name 2</h3>
                    <p>Description</p>
                </div>
                <div className="card">
                    <h3>Tournament Name 1</h3>
                    <p>Description</p>
                </div>
            </div>
        </main>
    );
}

export default HostedTournaments;