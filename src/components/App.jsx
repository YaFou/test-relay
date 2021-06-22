import {usePreloadedQuery} from "react-relay";
import graphql from 'babel-plugin-relay/macro'

export function App({preloadedQuery}) {
    const data = usePreloadedQuery(
        graphql`
            query AppQuery {
                launches(limit: 10) {
                    id
                }
            }
        `,
        preloadedQuery
    )

    return <h1>{data}</h1>;
}
