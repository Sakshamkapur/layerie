import React,{useState} from 'react';
import Input from './components/input';
import TopBar from './components/topbar';
import Canvas from './components/canvas';
import './App.css';

function Container(props){
  return <div className="container">
    {props.children}
  </div>
}

function Intructions(props){
  return <div className="instructions">
    <p>*Please Make Sure To Add A Json</p>
    <p>*Please Make Sure The Json Has A Children Property</p>
  </div>
}

function Screens({active,...props}){
  switch(active){
    case "input": return <React.Fragment>
      <Input json={props.json} setJson={props.setJson} /> 
    </React.Fragment>
    case "canvas": return <Canvas json={props.json} setStage={props.setStage} option={props.option} />
    default: return <React.Fragment>
      <Input json={props.json} setJson={props.setJson} /> 
    </React.Fragment>
  }
}

function App() {
  var [active,setActive] = useState("input");
  var [json,setJson] = useState("");
  var [stage,setStage] = useState(null);
  var [option,setOption] = useState({type: "vertical"});
  return (
    <React.Fragment>
      <Container>
        <TopBar active={active} json={json} setActive={setActive} option={option} stage={stage} setOption={setOption} />
        <Screens active={active} setActive={setActive} option={option} setStage={setStage}
        setOption={setOption} json={json} setJson={setJson} />
        {active === "input" && <Intructions />}
      </Container>
    </React.Fragment>
  );
}

export default App;
