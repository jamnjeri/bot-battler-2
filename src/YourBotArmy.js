import React from 'react'
import { Heart, Zap, Shield } from 'react-feather';

function YourBotArmy({ id, name, catchphrase, url, botClass, armor, damage, health, deleteButton }) {

    function handleClick (){
        // console.log(id)
        deleteButton(id)
    }

  return (
    <div className='card' >
        {/* Image - Title - catchphrase */}
        <img src={url} alt="Card image" />  
        <div className="card-body">
            <h4 className="card-title">{name} ({botClass})</h4>
            <p className="card-text">{catchphrase}</p>
            <div className='last-row'>
                <p><Heart />{health}  <Zap/>{damage}  <Shield/>{armor}</p>
                <button onClick={handleClick}>X</button>
            </div>
        </div>
    </div>
  )
}

export default YourBotArmy