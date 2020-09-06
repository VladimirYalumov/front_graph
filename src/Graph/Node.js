import React from 'react';
import './Node.css';

export default function Node({node, onClick, nodeColor, c}) {
    const top = node.y + 'px';
    const left = node.x + 'px'
    const styles = {
        node: {
            height: '50px', /* высота нашего блока */
            width: '50px',
            backgroundColor: nodeColor,
            top: top, 
            left: left,
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