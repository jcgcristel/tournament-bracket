// Styling
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import HostedTournaments from './pages/HostedTournaments';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Allow Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Server connection functions
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Initialize link to Server
const httpLink = createHttpLink({ uri: '/graphql' });

// Initialize client that will be used by the ReactDOM with connection to the Server
const client = new ApolloClient({
  link: httpLink, // Will likely need authentication
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tournaments" element={<HostedTournaments />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
