// Home.jsx
import Navigation from './Navigation';
import Profile from './profile/profile';
import Sections from './sections/sections';

function Home() {
  return (
    <div className='md:grid md:grid-cols-12 md:grid-flow-dense md:h-full xl:container xl:mx-auto 2xl:max-w-[1280px]'>
      <Navigation />
      <Profile />
      <Sections />
    </div>
  );
}

export default Home;
