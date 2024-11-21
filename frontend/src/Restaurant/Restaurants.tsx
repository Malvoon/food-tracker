import React, { useState } from 'react'
import { fakeRestaurants } from '../helper/Constants'

interface RestaurantProps {
  name: string
  city: string
  rating: number
}

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>(fakeRestaurants);

  return <div>
    {restaurants.map((restaurant) => (
      <div key={restaurant.name}>
        {restaurant.name} - {restaurant.city} - Note : {restaurant.rating}
      </div>
    ))}
  </div>
}

export default Restaurant