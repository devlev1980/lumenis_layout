import logo from './logo.svg';

import './App.css';
import Kishurim from "./components/Kishurim";
import Main from "./components/Main";
import BrahotVeIhulim from "./components/BrahotVeIhulim";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left_sidebar">
          <Kishurim/>
        </div>
        <div className="main">
          <Main/>
        </div>
        <div className="right_sidebar">
          <BrahotVeIhulim/>
        </div>
      </div>
    </div>
  );
}

export default App;
