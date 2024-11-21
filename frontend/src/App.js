import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/restaurants')
            .then(response => setRestaurants(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Les meilleurs restaurants</h1>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        {restaurant.name} - {restaurant.city} - Note : {restaurant.rating}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;