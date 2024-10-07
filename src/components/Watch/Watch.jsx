import React, { useEffect, useState } from 'react';

const Watch = () => {
    // const watches = [
    //     {
    //       id: 1,
    //       name: "Rolex Submariner",
    //       price: 10000
    //     },
    //     {
    //       id: 2,
    //       name: "Omega Seamaster",
    //       price: 8000
    //     },
    //     {
    //       id: 3,
    //       name: "Tag Heuer Carrera",
    //       price: 5000
    //     },
    //     {
    //       id: 4,
    //       name: "Casio G-Shock",
    //       price: 200
    //     },
    //     {
    //       id: 5,
    //       name: "Seiko Prospex",
    //       price: 1200
    //     },
    //     {
    //       id: 6,
    //       name: "Audemars Piguet Royal Oak",
    //       price: 25000
    //     },
    //     {
    //       id: 7,
    //       name: "Patek Philippe Nautilus",
    //       price: 30000
    //     }
    //   ];
    const [watches, setWatches] = useState([])

    // useEffect(() => {
    //     fetch('watch.json')
    //         .then(res => res.json())
    //         .then(data => setWatches(data))

    // }, [])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/asifikbal01890/watch-data/refs/heads/main/watch.json')
            .then(res => res.json())
            .then(data => setWatches(data))

    }, [])

    return (
        <div>
            {
                watches.map(watch => <>
                    <h1>Watch Name: {watch.name}</h1>
                    <h2>Price: ${watch.price}</h2>
                </>)
            }
        </div>
    );
};

export default Watch;