import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BotSpecs from './BotSpecs';
import styles from "./index.css";
import SortBar from './SortBar';


function App() {

    // API Url
    const url = "https://bot-battler-2-json.vercel.app/api/bots" 

    // API State
    const [data, setData] = useState([])

    // YourBotArmy State
    const [addBot, setAddBot] = useState([])

    // View Bot Specs State
    const [viewSpec, setviewSpec] = useState([])
    const [original, setOriginal] = useState([])
    
  
    // Fetch the bot data
    useEffect (() => {
      fetch(`${url}`)
        .then ((response) => response.json())
        .then ((json) => {
          setData(json)
          setOriginal(json)
          // console.log(original)
        });
    }, [])

    function viewSpecs(id){
      // console.log(id)
      
      const botOfInterest = data.filter((item) => {
        return (item.id === id)
      })

      setviewSpec(botOfInterest)
    }

    function backButton (){
      let empty = []
      setviewSpec(empty)
    }

    function enlistButton (id, bot_class){
      console.log(id)
      console.log(bot_class)

      const addedBot = data?.filter((item) => {
        return (item.id === id)})
      // console.log(addedBot)

      if(Object.keys(addBot).length===0){
        setAddBot(addedBot)
        // console.log("empty")
      }else{
        // console.log("not-empty")

        //Check if bot has already been added or if bot of similar class has been added

        if (addBot.filter(e => e.id === id).length > 0) {
          // console.log("ID Present")
        }
        else if (addBot.filter(e => e.bot_class === bot_class).length > 0) {
          // console.log("Bot_class Present")
        } 
        else {
          console.log("absent")
          let updatedArray = [...addBot, addedBot[0]]
          // console.log(addBot)
          // console.log(updatedArray)
          setAddBot(updatedArray)
          // console.log(addBot)
        }
      }

    }

    function handleDelete(id){
      // console.log(id)
      const updatedArmy = addBot.filter((item) => {
        return (item.id !== id)})
      // console.log(updatedArmy)
        setAddBot(updatedArmy)
    }

    function handleDischarge(id){
      // console.log(id)
      fetch(`${url}/${id}`, {
        method: "DELETE"
      })
    }

    function handleSort(category){
      // console.log(category)

      if (category !== 'original'){
        if (category === 'health'){
          // console.log("health")
            // Sort Functionality
          let sortArray = data
          sortArray.sort((a,b) => (a.health < b.health) ? 1 : ((b.health < a.health) ? -1 : 0));
          // console.log(sortArray)
          setData(sortArray)
          console.log(data)
          return data
        }
        else if (category === 'damage'){
          // console.log("damage")
          // Sort Functionality
          let sortArray = data
          sortArray.sort((a,b) => (a.damage < b.damage) ? 1 : ((b.damage < a.damage) ? -1 : 0));
          // console.log(sortArray)
          setData(sortArray)
          return data
        }
        else if (category === 'armor'){
          // console.log("armor")
          // Sort Functionality
          let sortArray = data
          sortArray.sort((a,b) => (a.armor < b.armor) ? 1 : ((b.armor < a.armor) ? -1 : 0));
          // console.log(sortArray)
          setData(sortArray)
          return data
        }
      }
      else{
        // console.log("Default")
        setData(original)
        return data
      }

      return data
    }


    // Display each bot
    const display = data.map((bot, index) => (
      // console.log(bot)
          <BotCollection  key={index} 
              id={bot.id} 
              name={bot.name}
              catchphrase={bot.catchphrase} 
              url={bot.avatar_url} 
              botClass={bot.bot_class}
              armor={bot.armor} 
              damage={bot.damage}
              health={bot.health}
              viewSpecs={viewSpecs} 
              dischargeButton={handleDischarge}
          />
    ))  

    const moreInfo = viewSpec.map((bot, index) => (
      // console.log(bot.id)
          <BotSpecs  key={index} 
              id={bot.id} 
              name={bot.name}
              catchphrase={bot.catchphrase} 
              url={bot.avatar_url} 
              botClass={bot.bot_class}
              armor={bot.armor} 
              damage={bot.damage}
              health={bot.health}
              backButton={backButton}
              enlistButton={enlistButton}
          />
    ))  

    const botArmy = addBot.map((bot, index) => (
      // console.log(bot.id)
          <YourBotArmy  key={index} 
              id={bot.id} 
              name={bot.name}
              catchphrase={bot.catchphrase} 
              url={bot.avatar_url} 
              botClass={bot.bot_class}
              armor={bot.armor} 
              damage={bot.damage}
              health={bot.health}
              deleteButton={handleDelete}
          />
    ))  




  return (
    <div className="App">

      {/* Your Bot Army*/}
      <div className='display-area'> 
        <h2>YourBotArmy</h2>
        <div className='card-container'>
          {botArmy}
        </div>
      </div>

      {/* Sort Bar */}
      <div>
          <SortBar handleSort={handleSort} />
      </div>
      {/* Bot Collection */}
      <div className='card-container'>
        {viewSpec.length > 0 ? (moreInfo) : (display)}
        {/* {display} */}
      </div>
    </div>
  );
}

export default App;
