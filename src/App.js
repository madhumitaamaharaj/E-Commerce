import Category from './components/Sidebar/Category';
import { RecoilRoot } from 'recoil';
import Mid from './components/MidPart/Mid';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
      <Navbar/>
      <Category/>
        <Mid />
      </div>
    </RecoilRoot>
  );
}

export default App;
