import React from 'react'
import { Heart, Zap, Shield } from 'react-feather';
import styles from "./index.css"

function BotCollection( { id, name, catchphrase, url, botClass, armor, damage, health, viewSpecs, dischargeButton } ) {
    // console.log(id)

    function handleClick (){
        viewSpecs(id)
    }

    function handleDelete (){
        dischargeButton(id)
    }

  return (
    <div className='card'>
        {/* Image - Title - catchphrase */}
        <img src={url} alt="Card image" onClick={handleClick}/>  
        <div className="card-body">
            <h4 className="card-title">{name} ({botClass})</h4>
            <p className="card-text">{catchphrase}</p>
            <div className='last-row'>
                <p><Heart />{health}  <Zap/>{damage}  <Shield/>{armor}</p>
            </div>
            <button onClick={handleDelete} className='delete'>Discharge Bot</button>
        </div>
    </div>
  )
}

export default BotCollection