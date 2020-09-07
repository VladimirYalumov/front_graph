import React from 'react';

export default function Delete({deleteNode, activeId, activeConnections, node, getNodeInfo}) {
    
    return (
        <div className={'col-3 form-group m-0 p-0 form-inline border border-dark'} >
        <div className={'p-1 m-0 col-6'}>
            <p className={'p-1 m-0'}>ID - {activeId}</p>
            <button className={"btn btn-danger"} onClick = {() => deleteNode(activeId)}>Delete</button>
        </div>
        <div className={"form-group col-6 m-0 p-0"}>
            <select multiple className={"form-control col-12"}>
            {
                activeConnections ? activeConnections.map(connect =>{
                    return <option key={connect.node}>id: {connect.node}, price: {connect.price}</option>
                }) : ''
            }
            </select>
        </div>
    </div>
    )
}