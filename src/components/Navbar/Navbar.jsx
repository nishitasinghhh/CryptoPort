import React, { useContext } from 'react'
import '/Users/nishitasingh/Desktop/cryptoport/src/components/Navbar/Navbar.css'
import logo from '/Users/nishitasingh/Desktop/cryptoport/src/images/logo.png'
import arrow from '/Users/nishitasingh/Desktop/cryptoport/src/images/arrow.webp'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {setCurrency}=useContext(CoinContext)
  const currencyHandler=(event)=>{
    switch(event.target.value){
      case "usd":{
        setCurrency({name:"usd", symbol:"$"})
        break;
      }
      case "eur":{
        setCurrency({name:"eur", symbol:"€"})
        break;
      }
      case "inr":{
        setCurrency({name:"inr", symbol:"₹"})
        break;
      }
      default:{
        setCurrency({name:"usd", symbol:"$"})
        break;
      }
    }

  }
  return (
    <div className='navbar' >
      <Link to={'/'}>
      <img src={logo} alt=""  className='logo'/>
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
       
      </div>
    </div>
  )
}

export default Navbar
