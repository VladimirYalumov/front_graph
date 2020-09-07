import React from 'react';

export default function AddConnect({setNewConnect,deleteConnect}) {

    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [price, setPrice] = React.useState('');

    return (
        <div className={'col-6 form-inline p-0 m-0 border border-dark'}>
            <div className={"col-3 m-3"}>
            <button className={"btn btn-secondary m-0 col-12"} onClick = {() => setNewConnect(from, to, price)}>Add connect</button>
            <button className={"btn btn-danger m-0 mt-1 col-12"} onClick = {() => deleteConnect(from, to)}>Delete connect</button>
            </div>
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
    )
}