import React, {useState, useEffect} from 'react';
import Graph from './Graph/Graph';
import Panel from './Panel/Panel';
import './App.css';

function App() {

const [way, setWay] = React.useState('Здесь отобразится кратчайший путь')

const [empty, setEmpty] = React.useState([[true]])

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
        if(data.success) {
            let localWay = '[ '
            data.way.map(elem => {
              localWay = localWay + elem + ' ';
            })
            localWay = localWay + ']';
            setWay(localWay);
            getGraph();
          } else alert(data.msg);
      });
}

function deleteNode(id){
  let errorTripId  = {
    id:id
}

fetch('http://basic/web/?r=site%2Fdelete-node', {
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
          alert('Node is deleted');
          getGraph();
          setActiveNode(graph[0].id);
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

function getNodeInfo(id){
  fetch('http://basic/web/?r=site%2Fget-node&id=' + id, {
    method: "GET"
})
    .then(response => response.json())
    .then(data => {
      if(data.success) {
        setNode(data.node);
      } else alert(data.msg);
    });
}

const [graph, setGraph] = React.useState([])
const [activeNode, setActiveNode] = React.useState(graph.length > 0 ? graph[0].id : '');
const [node, setNode] = React.useState([]);


useEffect(() => {
  getGraph();
},[]);

  return (
    <div className='App'>
      <div>
        <Graph setEmpty={setEmpty} graph = {graph} getNodeInfo = {getNodeInfo} onActive = {setActiveNode} activeId = {activeNode}/>
        <div className = "node_info col-12 m-0 p-1 form-inline">
          <button className={"col-3 btn btn-primary mr-3"} onClick = {() => getNodeInfo(activeNode)}>Подробнее про выбранный Node</button>
           <div>NAME - {node ? node.name : ''}</div>
        </div>
        <Panel node = {node} empty = {empty} setEmpty={setEmpty} deleteNode = {deleteNode} getWay = {getWay} way = {way} graph = {graph} activeId = {activeNode} setNewConnect={setNewConnect} setNewNode={setNewNode}/>
      </div>
    </div>
  );
}

export default App;
