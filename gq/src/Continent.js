import { gql } from "apollo-boost"
import { Query } from "react-apollo"

const GET_CONTINENTS = gql`
    query {
        continents {
            code
            name
        }
    }
`

const Continent = () => {
    return (
        <>
            <h2>continents</h2>
            <Query query={GET_CONTINENTS}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading ...</p>
                    if (error) return <p>Error~!</p>
                    return (
                        <ul>
                            {data.continents.map(({code, name}) => (
                                <li key={code}>{name}</li>
                            ))}
                        </ul>
                    )
                }}
            </Query>
        </>
    )
}

export default Continent

/*
Memo

gql에서 js 문법을 GraphQL 구문으로 바꿔준다.
이후 이 GraphQL 구문을 Query의 query prop으로 넘긴다.

Query 컴포넌트는 GraphQL API 호출 상태에 따라 랜더링할 내용을 리턴하는 함수를 자식으로 가져야 함.
또한 응답을 기다리는 동안 loading parameter에 true를 할당하므로 loading처리가 가능. -> 이후는 알잘딱
*/