const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL

// Helper function to fetch data from the Directus server using GraphQL
const fetchData = async (query, { variables = {} }) => {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(graphQLAPI, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    })

    const json = await res.json()

    if (json.errors) {
        throw new Error(json.errors)
    }

    return json
}

export default fetchData
