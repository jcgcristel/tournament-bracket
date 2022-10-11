// Styling
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import HostedTournaments from './pages/HostedTournaments';
import Tournament from './pages/Tournament';
import CreateTournament from './pages/CreateTournament';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

// Allow Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Server connection functions
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Initialize link to Server
const httpLink = createHttpLink({ uri: '/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Initialize client that will be used by the ReactDOM with connection to the Server
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="page-container">
          <div className="content-container">
            <Header />
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/create_tournament" element={<CreateTournament />}/>
                <Route path="/tournament">
                  <Route path="" element={<HostedTournaments />}/>
                  <Route path=":id" element={<Tournament />}/>
                </Route>
                <Route path="/login" element={<Signin />}/>
                <Route path="/signup" element={<Signup />}/>
              </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
