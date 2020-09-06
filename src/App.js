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

  const [way, setWay] = React.useState('Здесь отобразится кратчайший путь')

  useEffect(() => {
    getGraph();
},[]);

function getGraph(){
  fetch('http://basic/web/?r=site%2Fget-graph', {
    method: "GET"}
    )
      .then(response => response.json())
      .then(data => {
          setGraph(data)
      })
      .catch(e => {
          return e;
      });
}

function setNewConnect(from, to, price){
  let errorTripId  = {
      to: to,
      from: from,
      price: price
  }

  fetch('http://basic/web/?r=site%2Fadd-relation', {
      method: "POST",
      headers : {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
      },
      body: JSON.stringify(errorTripId)
  })
      .then(response => response.json())
      .then(data => {
          if(data.success) {
            alert('Connect is added');
            getGraph();
          }
          else alert(data.msg);
      });
}

function getWay(from, to){
  
  fetch('http://basic/web/?r=site%2Fway&from=' + from + '&to=' + to, {
      method: "GET"
  })
      .then(response => response.json())
      .then(data => {
        if(data.message = 'Call to a member function getId() on null'){
           alert('Из ' + from + ' в ' + to + ' попасть нельзя');
        } else if(data.success) {
            let localWay = '[ '
            data.way.map(elem => {
              localWay = localWay + elem + ' ';
            })
            localWay = localWay + ']';
            setWay(localWay);
            getGraph();
          }
          else alert(data.msg);
      });
}

function setNewNode(name){
  fetch('http://basic/web/?r=site%2Fadd-node&name='+name, {
      method: "GET"
  })
      .then(response => response.json())
      .then(data => {
          if(data.success) {
            alert('Node is added');
            getGraph();
          }
          else alert(data.msg);
      });
}

  const [activeNode, setActiveNode] = React.useState(graph[0].id)

  function setActiveElement(id){
    setActiveNode(id);
  }

  return (
    <div className='App'>
      <div>
        <Graph graph = {graph} onActive = {setActiveElement} activeId = {activeNode}/>
        <Panel getWay = {getWay} way = {way} graph = {graph} activeId = {activeNode} setNewConnect={setNewConnect} setNewNode={setNewNode}/>
      </div>
    </div>
  );
}

export default App;
