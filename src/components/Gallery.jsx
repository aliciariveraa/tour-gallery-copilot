// Task 3: Map Tours in a Gallery Component


// This component renders a gallery of tours using the `TourCard` component.

import React from 'react';
import TourCard from './TourCard';


const tours = [
    { id: 1, title: 'Beach Paradise', description: 'Enjoy the sunny beaches and crystal-clear waters.' },
    { id: 2, title: 'Mountain Adventure', description: 'Explore the majestic mountains and scenic trails.' },
    { id: 3, title: 'City Lights', description: 'Experience the vibrant city life and iconic landmarks.' },
];


// Define the Gallery component that maps over the tours array and renders a TourCard for each tour.

const Gallery = () => {
    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} title={tour.title} description={tour.description} />
            ))}
        </div>
    );
};

export default Gallery;