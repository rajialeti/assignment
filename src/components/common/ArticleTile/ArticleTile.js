/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './ArticleTile.scss';

export function ArticleTile(props) {
    return (
        <div className="col-md-4 my-2">
            <div className={`col py-3 article-tile rounded text-white ${props.customClass}`}>
                <div className="article-tile_date h6">{props.dateString}</div>
                <h4 className="article-tile_title">{props.title}</h4>
                <p className="article-tile_body">{props.description}</p>
                <button className="article-tile_more btn btn-outline-white border-white text-uppercase text-white">
                    Read more
                </button>
            </div>
        </div>
    );
}

export default ArticleTile;
