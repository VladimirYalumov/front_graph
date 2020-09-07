import React from 'react';

export default function Way({getWay, way}) {

    const [fromWay, setFromWay] = React.useState('');
    const [toWay, setToWay] = React.useState('');
    
    return (
        <div className={'col-12 form-inline p-0 m-0 border border-dark text-white bg-dark'}>
            <button className={"btn btn-success col-2 m-3"} onClick = {() => getWay(fromWay, toWay)}>Get the shortest path</button>
            <div className = {"form-group col-2 p-0 m-0"}>
                <label className = {"mr-3 col-3"}>FROM</label>
                <input className={'form-control col-5'} value={fromWay} onChange={event => setFromWay(event.target.value)}/>
            </div>
            <div className = {"form-group col-2 p-0 m-0"}>
                <label className = {"mr-1 col-1"}>TO</label>
                <input className={'form-control col-7'} value={toWay} onChange={event => setToWay(event.target.value)}/>
            </div>
            <div className = {"form-group col-4 p-0 m-0"}>
                <label className = {"mr-1 col-12"}>{way}</label>
            </div>
        </div>
    )
}