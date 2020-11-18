import React from 'react';
import PanelTitle from '../common/PanelTitle/PanelTitle';
import ArticleTile from '../common/ArticleTile/ArticleTile';
import './RelatedArticles.scss';

export function RelatedArticles() {
    // temporary generating dynamic string by spliting given string
    const allStrArr = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nulla accusamus iure blanditiis quo voluptatem voluptatum sunt. Ea quos sed nostrum rerum fuga provident molestiae, ipsam voluptatem dignissimos quisquam! Reiciendis.'.split(
        /\s+/
    );

    // list of all bg classes
    const classListNames = ['bg-sea-buckthorn', 'bg-picton-blue', 'bg-wisteria'];

    // get random length of trimmed string for description to show dynamic length of the tile
    const getDescription = (arr) => {
        return arr.slice(0, Math.ceil(Math.random(arr.length) * arr.length)).join(' ');
    };

    // sample tile object structure
    const newTile = {
        dateString: '12 Sep, 2018',
        title: 'Lorem ipsum dolor sit.',
        description: '',
        customClass: '',
    };

    // reusable given no tiles generator fn with bg classes
    const buildTiles = (num) => {
        const cNames = getRandomClasses();
        const tiles = Array.from({ length: num }, (it, idx) => ({
            ...newTile,
            description: getDescription(allStrArr),
            customClass: cNames[idx],
        }));
        return tiles;
    };

    // function gets the random length of array classes
    const getRandomClasses = () => {
        var indexes = new Set();
        while (indexes.size !== 3) {
            indexes.add(Math.floor(Math.random(3) * 3));
        }
        return [...indexes].map((item) => classListNames[item]);
    };

    // mock tiles storing as a functional state
    const [tiles, setTiles] = React.useState([...buildTiles(3)]);

    // handler when click on loadmore button
    const handleLoadMore = () => {
        setTiles([...tiles, ...buildTiles(3)]);
    };

    return (
        <div className="container">
            <div className="articles text-left">
                <PanelTitle
                    title="Related Articles"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores iure quae dolorum dolorem quis!"
                />
                <div className="row">
                    {tiles.map((item, idx) => {
                        return <ArticleTile key={idx} {...item} />;
                    })}
                </div>
            </div>
            <div className="text-center">
                <button onClick={handleLoadMore} className="mt-3 btn btn-outline-primary">
                    Load More
                </button>
            </div>
        </div>
    );
}

export default RelatedArticles;
