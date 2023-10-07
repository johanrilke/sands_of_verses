import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Unearth the Sands of Time
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>A Haven for Poetry</span>
    </h1>
    <p className='desc text-center'>
    Dive into the world of verses with Sonorhyme, a platform that allows users to discover, create, and share poems and quotes that resonate with them. Share the resonance and connect with others through the power of words.
    </p>

    <Feed />
  </section>
);

export default Home;
