import React from 'react'

export default function Hero({chidren,hero}) {
    return (
        <header className={hero}>
           {chidren} 
        </header>
    )
}
Hero.defaultProps={
    hero:'defaultHero'
  }