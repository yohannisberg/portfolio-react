import TopNav from './TopNav';
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
      <TopNav />
      {/* <Navbar /> */}
      <Header />
      <Skills />
      <Portfolio />
    </>
  );
};