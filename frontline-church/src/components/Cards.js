import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
        <h1>Come Worship With Us!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='images/photo1.jpg'
                    text='Learn About Us'
                    path='/about' />
                     <CardItem 
                    src='images/photo2.jpg'
                    text='Connect With Us'
                    path='/join-us' />
                     <CardItem 
                    src='images/photo3.jpg'
                    text='Location & Service Times'
                    path='/location' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;