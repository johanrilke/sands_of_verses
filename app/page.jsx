import Hero from "@components/Hero";
import Footer from '@components/Footer';

const Home = () => (
  <section className='w-full flex-center flex-col gap-5'>
    <h1 className='head_text text-center'>
       Sonorhyme is
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> A Haven for Poetry</span>
    </h1>
    <p className='mt-3 desc text-center flex flex-col gap-3'>
    <span>Dive into the world of verses with Sonorhyme, a platform that allows users to discover, create, and share poems and quotes that resonate with the hearts.</span>
    </p>

    <Hero />
    <Footer />
  </section>
);

export default Home;
