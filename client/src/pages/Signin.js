import { LOGIN_USER } from "../utils/mutations";

const Signin = (props) => {
    const [inputState, setInputState] = useState({username: '', password: ''})
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputState({ ...inputState, [name]: value, }); 
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addUser({
            variables: { ...inputState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };

    return (
        <main className="center-horizontal">
            <div className="container">
                <h2>Sign In</h2>
                <div className="line" />
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange}></input>
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