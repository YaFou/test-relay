import {Environment, Network, RecordSource, Store} from "relay-runtime";

async function fetchGraphQL(params, variables) {
    const response = await fetch('https://api.spacex.land/graphql/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: params.text,
            variables
        })
    })

    return await response.json()
}

export default new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource(), {})
})
