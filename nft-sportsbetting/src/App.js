import { makeStyles } from '@material-ui/core/styles';
import { TopNav } from './Components/Home_Screen/TopNav';
import { Hero } from './Components/Home_Screen/Hero';
import { TopMenu } from './Components/Home_Screen/topMenu';
import { HomeScreen } from './Components/Home_Screen/HomeScreen';
import Ticker from './Components/Home_Screen/Ticker';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#1E1E1E',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <TopNav />
        <TopMenu />
        <Hero />
        <Ticker />
      </header>
      <main>
        <HomeScreen />
      </main>
    </div>
  );
};

export default App;