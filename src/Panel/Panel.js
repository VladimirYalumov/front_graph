import React from 'react';
import './Panel.css';
import Delete from './Delete';
import AddConnect from './AddConnect';
import AddNode from './AddNode';
import Way from './Way';
 
export default function Panel(props) {

    function getLocalConnections(graph, id){
        let localNode;
        graph.map(node => {
            if (node.id === id)
            {
                localNode = node.connections;
                return;
            }
        })
        return localNode;
    }

    const activeConnections = getLocalConnections(props.graph, props.activeId);

    return (      
        <div className={"m-0 p-0 border border-dark panel container-fluid"}>
            <div className={"row m-0 p-0"}>
                    {console.log(props.node)}
                    <Delete 
                    deleteNode = {props.deleteNode} 
                    activeId = {props.activeId} 
                    activeConnections={activeConnections}
                    node = {props.node}
                    />
                    <AddConnect setNewConnect = {props.setNewConnect} deleteConnect={props.deleteConnect}/>
                    <AddNode setNewNode = {props.setNewNode} />
                    <Way getWay = {props.getWay} way = {props.way}/>
            </div>
        </div>
    )
}