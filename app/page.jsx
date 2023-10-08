import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col gap-5'>
    <h1 className='head_text text-center'>
      Unearth the Sands of Time
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>A Haven for Poetry</span>
    </h1>
    <p className='mt-3 desc text-center flex flex-col gap-3'>
    <span>Dive into the world of verses with Sonorhyme, a platform that allows users to discover, create, and share poems and quotes that resonate with them.</span>
    <span>Share the resonance and connect with others through the power of words.</span>
    </p>

    <Feed />
  </section>
);

export default Home;
