import Hero from './Hero/Hero';
import TopNav from './TopNav/TopNav';
import Header from './Header';
import Skills from '../Skills/Skills';
import Lightbulb from './Lightbulb/Lightbulb';
import Likes from './Likes';
import Portfolio from './Portfolio';
import About from './About';
import Footer from './Footer';

export function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <Skills />
      <Lightbulb />
    </>
  );
};