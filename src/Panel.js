import React from 'react';
import './Panel.css';
 
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

    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [name, setName] = React.useState('');

    const [fromWay, setFromWay] = React.useState('');
    const [toWay, setToWay] = React.useState('');

    return (
        <div className={"m-0 p-0 border border-dark panel container-fluid"}>
            <div className={"row m-0 p-0"}>
                <div className={'col-3 form-group m-0 p-0 form-inline border border-dark'}>
                    <div className={'p-0 m-0 col-6'}>
                        <p>ID - {props.activeId}</p>
                        <button className={"btn btn-danger"} onClick = {() => props.deleteNode(props.activeId)}>Delete</button>
                    </div>
                    <div className={"form-group col-6 m-0 p-0"}>
                        <select multiple className={"form-control col-12"}>
                        {
                            activeConnections.map(connect =>{
                                return <option key={connect.node}>{connect.node} - {connect.price}</option>
                            })
                        }
                        </select>
                    </div>
                </div>

                <div className={'col-6 form-inline p-0 m-0 border border-dark'}>
                <button className={"btn btn-secondary col-3 m-3"} onClick = {() => props.setNewConnect(from, to, price)}>Add connect</button>
                    <div className = {"form-group col-3 p-0"}>
                        <label className = {"mr-3 col-1"}>FROM</label>
                        <input className={'form-control col-5'} value={from} onChange={event => setFrom(event.target.value)}/>
                    </div>
                    <div className = {"form-group col-2 p-0"}>
                        <label className = {"mr-1 col-1"}>TO</label>
                        <input className={'form-control col-7'} value={to} onChange={event => setTo(event.target.value)}/>
                    </div>
                    <div className={'form-group col-3 m-0 p-0'} >
                        <label className = {"mr-1 col-4"}>PRICE</label>                  
                        <input className={'form-control col-6'} value={price} onChange={event => setPrice(event.target.value)}/>
                    </div>  
                </div>

                <div className={'col-3 form-inline p-0 border border-dark'}>
                    <div className={'form-group col-4'} >                  
                        <input className={'form-control col-12'} value={name} onChange={event => setName(event.target.value)} />
                    </div>     
                    <button className={"col-6 btn btn-primary m-3"} onClick = {() => props.setNewNode(name)}>Add Node</button>    
                </div>

                <div className={'col-12 form-inline p-0 m-0 border border-dark text-white bg-dark'}>
                <button className={"btn btn-success col-2 m-3"} onClick = {() => props.getWay(fromWay, toWay)}>Get the shortest path</button>
                    <div className = {"form-group col-2 p-0 m-0"}>
                        <label className = {"mr-3 col-3"}>FROM</label>
                        <input className={'form-control col-5'} value={fromWay} onChange={event => setFromWay(event.target.value)}/>
                    </div>
                    <div className = {"form-group col-2 p-0 m-0"}>
                        <label className = {"mr-1 col-1"}>TO</label>
                        <input className={'form-control col-7'} value={toWay} onChange={event => setToWay(event.target.value)}/>
                    </div>
                    <div className = {"form-group col-4 p-0 m-0"}>
                        <label className = {"mr-1 col-12"}>{props.way}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}