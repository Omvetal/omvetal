import logo from './logo.svg';
import './App.css';
import Apple from './components/Apple';
import Orange from './components/Orange';
import Tag from './components/Tag';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
     <Apple />
     <Orange />
     <Tag />
     <Image />
    </div>
  );
}

export default App;
