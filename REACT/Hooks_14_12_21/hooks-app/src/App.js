import logo from './logo.svg';
import './App.css';
import YourName from './components/YourName';
import Name from './components/Name';
import ClickHandler from './components/ThreeCounter';
import Form from './components/Form';
import Vaction from './vacation/Vaction';
import VactionAppAgain from './vacation/VactionAgain';

function App() {
  return (
    <div className="App">
{/* <YourName/> */}
{/* <Name nameProp="david"/> */}
{/* <ClickHandler/> */}
{/* <Form/> */}
<Vaction/>
{/* <VactionAppAgain/> */}
    </div>
  );
}

export default App;
