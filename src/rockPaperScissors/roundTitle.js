import React from "react"

export const RoundTitle = ({ game }) => {
  return (
    <div className='Round'>
      <h2>Rock, Paper, Scissors</h2>
      <p>Round {" " + game.round}, select the symbol </p>
    </div>
  )
}
