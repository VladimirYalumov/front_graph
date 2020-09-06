import React from 'react';
import './Graph.css';
import Node from './Node';

export default function Graph(props) {

    function setActiveConnections(){

        let connectionsArray = [];

        props.graph.map(node => {
            if (props.activeId === node.id){
                node.connections.map(connect => {
                    connectionsArray.push(connect.node);
                })
            }
        })

        return connectionsArray;
    }

    const connections = setActiveConnections();

    return (
        <div className={"m-0 overflow-auto border border-dark graph p-0"}>
            {props.graph.map(node => {

                function setNodeColor(){
                    if (props.activeId === node.id){                       
                        return 'darkgray';
                    } else {
                        for (let i = 0; i < connections.length; i++){
                            if (connections[i] === node.id){
                                return 'lightgray';
                            }
                        }
                        return 'white';
                    }
                }

                let color = setNodeColor();

                return <Node 
                node={node} 
                key={node.id} 
                onClick = {props.onActive} 
                nodeColor = {color}
                active = {props.activeId}
                c={connections}
                />
            })
            }
        </div>
    )
}