import React from 'react';
import './Panel.css';

export default function Panel(props) {
    return (
        <div className={"m-0 border border-dark panel container-fluid"}>
            <div className={"row m-3"}>
                <div className={'col-1 p-0 m-0 text-left'}><p>ID - {props.activeId}</p></div>
                <div className={'col-2 p-0 m-0'}><button className={"btn btn-danger"}>Удалить</button></div>
                <div className={'col-2 p-0 m-0'}><button className={"btn btn-secondary"}>Добавить связь</button></div>
                <div className={'col-2 p-0 m-0'}><button className={"btn btn-primary"}>Добавить вершину</button></div>
            </div>
        </div>
    )
}