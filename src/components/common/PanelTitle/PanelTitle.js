import React from 'react';
import './PanelTitle.scss';

export function PanelTitle(props) {
    return (
        <div className="panel">
            <h3 className="panel_title">{props.title}</h3>
            <p className="panel_description w-75 text-muted">{props.description}</p>
        </div>
    );
}

export default PanelTitle;
