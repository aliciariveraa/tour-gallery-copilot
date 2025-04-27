// Task 2: Build the TourCard Component

import React, { useState } from 'react';


// TourCard component to display individual tour details

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="tour-card" style={styles.card}>
            <img src={image} alt={name} style={styles.image} />
            <div style={styles.content}>
                <h2 style={styles.title}>{name}</h2>
                <h4 style={styles.price}>${price}</h4>
                <p style={styles.info}>
                    {showInfo ? info : `${info.substring(0, 100)}...`}
                    <button
                        onClick={() => setShowInfo(!showInfo)}
                        style={styles.toggleButton}
                    >
                        {showInfo ? 'Show Less' : 'Read More'}
                    </button>
                </p>
                <button onClick={() => onRemove(id)} style={styles.removeButton}>
                    Not Interested
                </button>
            </div>
        </div>
    );
};

// Define inline styles for the TourCard component
const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    content: {
        padding: '16px',
    },
    title: {
        margin: '0 0 8px',
        fontSize: '1.5rem',
    },
    price: {
        margin: '0 0 16px',
        color: '#2a9d8f',
        fontWeight: 'bold',
    },
    info: {
        marginBottom: '16px',
        lineHeight: '1.6',
    },
    toggleButton: {
        marginLeft: '8px',
        background: 'none',
        border: 'none',
        color: '#007bff',
        cursor: 'pointer',
        textDecoration: 'underline',
    },
    removeButton: {
        backgroundColor: '#e63946',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default TourCard;