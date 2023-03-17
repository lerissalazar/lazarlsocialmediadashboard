import './App.css';
import Headercomponent from './components/headercomponent';
import Platformscomponent from './components/platformscomponent';
import SecondHeadercomponent from './components/secondheadercomponent';
import BottomPlatformComponent from './components/bottomplatformcomponents';
import LastPlatformComponent from './components/lastplatformcomponent';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container className='fluid'>
        <div>
          <Headercomponent></Headercomponent>
          <Platformscomponent></Platformscomponent>
          <SecondHeadercomponent></SecondHeadercomponent>
          <BottomPlatformComponent></BottomPlatformComponent>
          <LastPlatformComponent></LastPlatformComponent>
        </div>
      </Container>
    </>
  );
}

export default App;
