const Signin = () => {
    return (
        <main className="center-horizontal">
            <div className="container">
                <h2>Sign In</h2>
                <div className="line" />
                <form>
                    <div className="input-group">
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" id="username" name="username" placeholder="Username"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" name="password" placeholder="Password"></input>
                    </div>
                    <div className="center-horizontal">
                        <input type="submit" className="button" id="signin" value="Sign In"></input>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Signin;