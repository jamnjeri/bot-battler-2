import React from 'react'
import styles from "./index.css"

function SortBar({ handleSort }) {

  function handleChange(event){
    handleSort(event.target.value)
  }

  return (
    <div className='sortBar'>
      <label htmlFor="sorts" >SortBy:  </label>
      <select name='sorts' onChange={handleChange}>
        <option value="original">Original</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  )
}

export default SortBar