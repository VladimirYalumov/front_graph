import React, {useEffect} from 'react';
import Graph from './Graph/Graph';
import Panel from './Panel';
import './App.css';

function App() {

  const [graph, setGraph] = React.useState([
    {
      id:1, connections:[
        {node:2, price:100},
        {node:44, price:500}
      ]
    },
    {
      id:2, connections:[
        {node:3, price:100}
      ]
    },
    {
      id:3, connections:[
        {node:1, price:100},
        {node:44, price:50}
      ]
    },
    {
      id:44, connections:[
        {node:1, price:100},
        {node:2, price:500}
      ]
    },
  ])

  useEffect(() => {
    fetch('http://basic/web/?r=site%2Fget-graph', {
      method: "GET"}
      )
        .then(response => response.json())
        .then(data => {
            setGraph(data)
            console.log(data);
            console.log(123);
        })
        .catch(e => {
            return e;
        });
},[]);

  const [activeNode, setActiveNode] = React.useState(graph[0].id)

  function setActiveElement(id){
    setActiveNode(id);
  }

  return (
    <div className='App'>
      <div>
        <Graph graph = {graph} onActive = {setActiveElement} activeId = {activeNode}/>
        <Panel activeId = {activeNode}/>
      </div>
    </div>
  );
}

export default App;
