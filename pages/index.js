import Section from "../components/section";
import { getPosts } from "../services/hygraph";


export default function Home({ posts }) {

  return (
    <main>
      <div className="border-t-2 border-black bg-yellow-600 px-10 py-10 lg:py-20  lg:px-20">
        <h1 className="text-black font-serif text-7xl font-thin flex flex-col  mb-5 lg:flex-row lg:space-x-4 "><span>Stay </span>  <span> focused.</span></h1>

        <p1 className="text-lg font-serif tracking-wide ">Discover stories , thinking and expertise from writers on any topic</p1>
        <div className="mt-5">
          <button className="bg-transparent border-solid border-2 border-black rounded-full text-white bg-black py-1 px-5">Get Started</button>
        </div>

      </div>

      {
        posts.map((post, index) => (<Section key={index} post={post} />))
      }


    </main>
  )
}

// fetch at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}