import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Pricing from '../components/Pricing';
import Testimonies from '../components/Testimonies';
import Contact from '../components/Contact';
import Action from '../components/Action';
import Footer from '../components/Footer';
import Companies from '../components/Companies';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IBS</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full leading-normal text-gray-600">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.jpeg')",
            zIndex: -1,
          }}
        />
      </div>
        <Header />
        <Landing />
        <Companies/>
        <Demo />
        <Features />
        <Pricing />
        {/* <Testimonies /> */}
        <Action />
        <Contact />
        <Footer />
    </>
  );
};

export default Home;
