import Hero from './Hero/Hero';
import TopNav from './TopNav/TopNav';
// import TopNavNew from './TopNavNew/TopNavNew';
import Skills from './Skills/Skills';
// import SkillsMatter from './SkillsMatter/SkillsMatter';
import Likes from './Likes/Likes';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';

import { BuilderComponent } from '@builder.io/react';

export function Home() {
  return (
    <>
      <TopNav />
      {/* <TopNavNew />  */}
      <Hero />
      <Skills />
      {/* <SkillsMatter /> */}
      <Likes />
      <Portfolio />
      <About />

      <BuilderComponent model="page" />
    </>
  );
};