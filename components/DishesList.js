import React from 'react'

import DishItem from '../components/DishItem'

export default ({dishes}) => (
  <div>
  {dishes.map( dish =>
    <DishItem dish={dish} key={dish.name}/>
  )}
  </div>
)
