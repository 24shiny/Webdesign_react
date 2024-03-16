import React from 'react'
import logo from '../logo.svg'
import './Morning.css'
import Morningwhite from './Morningwhite'
import MorningBlue from './MorningBlue'

export default function Morning() {

  return (
    <div>
      <img id="logo" src={logo} alt="logo" />
      <h1 id="greeting">Good morning!</h1>
      <Morningwhite />
      <MorningBlue />
    </div>
  )
}
