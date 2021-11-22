import logo from './logo.svg';
import './App.css';
import Counter from './components/CounterComponent';
import SmartCounter from './components/SmartConter';
import LongText from './components/StyleComponent';
import ShowHide from './components/Showhide';

function App() {
  return (
    <div className="App">

      {/* start with zerp  */}
        <Counter />
      {/* start with 7  */}
        <SmartCounter starter={2}/>
        <SmartCounter starter={10}/>

        <LongText text="if the txt is upper than 5 string prrint smt "/>

        <ShowHide text="hhhhhhhhhhhhh"/>

    </div>
  );
}

export default App;
