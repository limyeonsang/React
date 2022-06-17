import { ApolloProvider } from "react-apollo"; 
import { client } from "./Apollo";
import Continent from "./Continent";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>hi apollo</div>
      <Continent />
    </ApolloProvider>
  );
}

export default App;
