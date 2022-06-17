import { ApolloProvider } from "react-apollo"; 
import { client } from "./apollo_react/Apollo";
import Continent from "./apollo_react/Continent";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>hi apollo</div>
      <Continent />
    </ApolloProvider>
  );
}

export default App;
