import type { NextPage } from 'next'
import Head from 'next/head'

import { useQuery } from 'react-query'
import { getHomepagePosts } from '../queries/queries'

import PostCard from '../components/PostCard'

const Home: NextPage = () => {

  // data is by default parameter but we can rename it by using 'data: (name you want to keep)'
  const { status, data: posts, error, isFetching, isSuccess } = useQuery('posts', async () => await getHomepagePosts())

  console.log(posts)

  return (
    <div className="flex min-h-screen flex-col items-center py-2 max-w-2xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSuccess &&
        posts.map((post: { id: number, title: string, body: string, featured_image: { id: string } }) => 
        <PostCard 
          key={post.id} 
          title={post.title} 
          image={post.featured_image.id} 
          body={post.body} 
        />)
      }
    </div>
  )
}

export default Home
