
import { TopNav } from './Components/Home_Screen/TopNav';
import { Hero } from './Components/Home_Screen/Hero';
import { TopMenu } from './Components/Home_Screen/topMenu';
import { HomeScreen } from './Components/Home_Screen/HomeScreen';
import Ticker from './Components/Home_Screen/Ticker';
import './App.css';


const App = () => {
  return (
    <>
      <header className="App-header">
          <TopNav />
          <TopMenu />
          <Hero />
          <Ticker />
          <HomeScreen />
      </header>
    </>
    );
}

export default App;
