import './App.css';

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
      <div className="App">
        <p>
          Hello World
        </p>
      </div>
    </ApolloProvider>
  );
}

export default App;
