import {render} from "react-dom";
import {App} from "./components/App";
import {loadQuery, RelayEnvironmentProvider} from "react-relay";
import RelayEnvironment from "./RelayEnvironment";
import AppQuery from './components/__generated__/AppQuery.graphql'

const preloadedQuery = loadQuery(RelayEnvironment, AppQuery)
render(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
        <App preloadedQuery={preloadedQuery}/>
    </RelayEnvironmentProvider>,
    document.getElementById('root')
)
