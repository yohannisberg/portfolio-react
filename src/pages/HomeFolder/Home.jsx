import Navbar from './Navbar';
import Header from './Header';
import Skills from './Skills';
import Likes from './Likes';
import Portfolio from './Portfolio';
import About from './About';
import Footer from './Footer';

export function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Likes />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
};