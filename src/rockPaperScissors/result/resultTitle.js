import React from "react"

export const ResultTitle = ({ plays }) => {
  switch (plays.result) {
    case "successful":
      return (
        <div>
          <h2>You win ;)</h2>
          <p>Play again!</p>
        </div>
      )
    case "draw":
      return (
        <div>
          <h2>Draw :O</h2>
          <p>Play again!</p>
        </div>
      )
    case "defeat":
      return (
        <div>
          <h2>You lose :(</h2>
          <p>Play again!</p>
        </div>
      )
    default:
      break
  }
}
