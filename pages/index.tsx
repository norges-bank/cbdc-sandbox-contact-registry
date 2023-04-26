import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'

type Props = {
  someProp: string
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Title</h1>
        <main>
          <h2>{props.someProp}</h2>
        </main>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const feed = await prisma.post.findMany({
  //   where: { published: true },
  //   include: { author: true },
  // })
  return {
    props: { someProp: "Hello from server"},
  }
}

export default Home
