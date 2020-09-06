import React from 'react';
import './Node.css';

export default function Node({node, onClick, nodeColor, index}) {

    function setX(){
        if (index % 5 === 0) return 10;
        let wholePart = Math.trunc(index / 5);
        switch (index - wholePart*5) {
            case 0:
                return 0;
                break;
            case 1:
                return 160;
                break;
            case 2:
                return 320;
                break;
            case 3:
                return 480;
                break;
            case 4:
                return 640;
                break;
        }
    }

    const top = node.y + 'px';
    const left = node.x + 'px'
    const styles = {
        node: {
            height: '50px', /* высота нашего блока */
            width: '50px',
            backgroundColor: nodeColor,
            top: (Math.trunc(index / 5) !== 0) ? (Math.trunc(index / 5) * 110)+'px' : '10px', 
            left: setX()+'px',
            position: 'absolute',
            textAlign: 'center',
            paddingTop: '12px',
            borderRadius: '50%'
        },

        text:{
            userSelect: 'none' 
        }
    }

    return (
        <div 
        className={"m-0 border border-dark text-center"} 
        style={styles.node}
        onClick={() => onClick(node.id)}
        >
        <p style={styles.text}>{node.id}</p>
        </div>
    )
}