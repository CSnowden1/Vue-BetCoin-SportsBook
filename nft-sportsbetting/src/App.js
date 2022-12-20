
import { TopNav } from './Components/Home_Screen/TopNav';
import GlobalStyle from './globalStyles';



const App = () => {
  return (
    <>
      <GlobalStyle />
      <header className="App-header">
          <TopNav />
          <p>
            This is still on.
          </p>
      </header>
    </>
    );
}

export default App;
