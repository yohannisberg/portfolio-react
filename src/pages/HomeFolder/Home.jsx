import Hero from './Hero/Hero';
import TopNav from './TopNav/TopNav';
import Skills from './Skills/Skills';
import Likes from './Likes/Likes';
import Brands from './Brands/Brands'
import Portfolio from './Portfolio/Portfolio';

export function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <Skills />
      <Likes />
      <Portfolio />
      <Brands />
    </>
  );
};