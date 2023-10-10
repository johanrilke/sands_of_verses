import Feed from "@components/Feed";
import Footer from "@components/Footer";

const Home = () => (
  <section className='w-full flex-center flex-col gap-5'>
    <h1 className='head_text text-center'>
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> A Haven for Poetry</span>
    </h1>
    <p className='mt-3 desc text-center flex flex-col gap-3'>
    <span>Browse your mood.</span>
    </p>

    <Feed />
    <Footer />
  </section>
);

export default Home;