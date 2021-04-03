import React from 'react'
import{FaCoins} from 'react-icons/fa'
import  './Searchbar.css'

const Searchbar = () => {
  return (
		<div>
			<div className="Searchbar">
				<FaCoins className= "icon" />
				<h1>Coins <span className="purple">Search</span></h1>
			</div>
		</div>
	);
}

export default Searchbar