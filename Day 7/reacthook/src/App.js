import logo from './logo.svg';
import './App.css';
import Statehook from './reacthook';
import Styles from './Styles';
import Class_components from './reactclass';
import Function_Components from './reactfunction';
import revent from './reactevent';
import Style from './Style';

function App() {
  return (
    <>
    <Statehook/>
    <Styles/>
    <Class_components/>
    <Function_Components name="OM" college="AVCOE"/>
    <myStyle/>
    <revent/>
    </>
  );
}

export default App;
