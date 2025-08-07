import Hero from './Hero/Hero';
import TopNav from './TopNav/TopNav';
import Skills from './Skills/Skills';
import Likes from './Likes/Likes';
import Portfolio from './Portfolio/Portfolio';
import Brands from './Brands/Brands'
import About from './About/About';

export function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <Skills />
      <Likes />
      <Portfolio />
      <Brands />
      <About />
    </>
  );
};