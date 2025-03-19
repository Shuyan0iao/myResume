
import './App.css'
import 'boxicons/css/boxicons.min.css';
import Navigation from './Navigation';
import Profile from './profile/profile';
import Sections from './sections/sections';

function App() {
  return (
    <div className="min-h-screen bg-default text-whit">

      <div className='md:grid md:grid-cols-12 md:grid-flow-dense md:h-full xl:container xl:mx-auto 2xl:max-w-[1280px]'>
        <Navigation />
        <Profile />
        <Sections />
      </div>

    </div>
  );
}

export default App
