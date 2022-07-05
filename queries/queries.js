import fetchData from "../helpers/fetchData";

// GraphQL query getHomepagePosts which is sent to fetch data
export const getHomepagePosts = async () => {
    const data = await fetchData(
        `
        query HomepagePosts {
            posts {
                id
                title
                slug
                featured_image
                body
            }
        }
        `,
        {
            variables: {}
        }
    )

    return data.data.posts
}
