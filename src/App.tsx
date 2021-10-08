import GlobalStyle from './styles/global';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Home />
      </MainContainer>
      <GlobalStyle />
    </>
  );
};

export default App;
