import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ value }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <FaStar
                        key={index}
                        size={15}
                        style={{ marginRight: 5, cursor: 'pointer' }}
                        color={ratingValue <= value ? 'gold' : 'grey'}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
