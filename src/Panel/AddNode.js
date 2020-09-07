import React from 'react';

export default function AddNode({setNewNode}) {

    const [name, setName] = React.useState('');
    
    return (
        <div className={'col-3 form-inline p-0 border border-dark'}>
            <div className={'form-group col-4'} >                  
                <input className={'form-control col-12'} value={name} onChange={event => setName(event.target.value)} />
            </div>     
            <button className={"col-6 btn btn-primary m-3"} onClick = {() => setNewNode(name)}>Add Node</button>    
        </div>
    )
}