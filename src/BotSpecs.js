import React from 'react'
import styles from './index.css'
import { Heart, Zap, Shield, Tool, Feather, Crosshair, Award, Gitlab } from 'react-feather';

function BotSpecs({ id, name, catchphrase, url, botClass, armor, damage, health, backButton, enlistButton, }) {
  // console.log(botClass)

  // if (botClass === "Support" ){
  //   let symbol = Tool;
  //   return symbol
  // }
  // else if (botClass === "Medic" ){
  //   let symbol = Feather;
  //   return symbol
  // }
  // else if (botClass === "Assault" ){
  //   let symbol = Crosshair;
  //   return symbol
  // }
  // else if (botClass === "Defender" ){
  //   let symbol = Shield;
  //   return symbol
  // }
  // else if (botClass === "Captain" ){
  //   let symbol = < Award />;
  //   return symbol
  // }
  // else if (botClass === "Witch" ){
  //   let symbol = Gitlab;
  //   return symbol
  // }

  function handleClick(){
    // console.log(id)
    backButton()
  }

  function handleEnlist (){
    // console.log(id)
    enlistButton(id, botClass)
  }

  return (
    <div className='spec-card'>
        {/* Image - Title - catchphrase */}
        <img src={url} alt="Spec image"/>  
        <div className='spec-content'>
          <h3>Name: {name}</h3>
          <h4>Catchphrase: </h4>
          <p>{catchphrase}</p>
          <h4>Class: {botClass} </h4>
          <div className='specSymbols'>
            <p><Heart />{health}</p>
            <p><Zap/>{damage}</p>
            <p><Shield/>{armor}</p>
          </div>
          <div className='spec-buttons'>
            <button onClick={handleClick} className='spec-one'>Go Back</button>
            <button onClick={handleEnlist} className='spec-one'>Enlist</button>
          </div>

        </div>
    </div>
  )
}

export default BotSpecs