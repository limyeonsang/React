import {ApolloClient} from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import gql from "graphql-tag"

const client = new ApolloClient({
    link: createHttpLink({ uri: "https://countries.trevorblades.com" }),
    cache: new InMemoryCache(),
})

(async function() {
    const { loading, error, data } = await client.query({
        query: gql`
            query {
                continents {
                    code
                    name
                }
            }
        `
    })

    console.log("loading", loading);
    console.log("error", error);
    console.log("data", data);
})();


/*
Memo

- createHttpLink: GraphQL 서버와 연동할 수 있도록 HttpLink 객체를 생성
*/