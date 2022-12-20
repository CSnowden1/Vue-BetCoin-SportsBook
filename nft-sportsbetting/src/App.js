
import { TopNav } from './Components/Home_Screen/TopNav';
import { Hero } from './Components/Home_Screen/Hero';
import { TopMenu } from './Components/Home_Screen/topMenu';
import { HomeScreen } from './Components/Home_Screen/HomeScreen';
import GlobalStyle from './globalStyles';



const App = () => {
  return (
    <>
      <GlobalStyle />
      <header className="App-header">
          <TopNav />
          <TopMenu />
          <Hero />
          <HomeScreen />
      </header>
    </>
    );
}

export default App;
