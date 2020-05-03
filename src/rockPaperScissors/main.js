import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { Link } from "@reach/router"
import { faHandRock, faHandPaper, faHandScissors } from "@fortawesome/free-solid-svg-icons"
import { Switch } from "./play/switch.js"
library.add(faHandRock, faHandPaper, faHandScissors)

export const Main = ({ game, setGame, setPlays }) => {
  return (
    <main className='Game'>
      <l to='/result'>
        <div
          onClick={() => {
            Switch({ game, setGame, setPlays }, "rock")
          }}
        >
          <FontAwesomeIcon icon={["fas", "hand-rock"]} transform={{ rotate: -90 }} size='6x' />
          <p>Rock</p>
        </div>
      </Link>
      <Link to='/result'>
        <div
          onClick={() => {
            Switch({ game, setGame, setPlays }, "paper")
          }}
        >
          <FontAwesomeIcon icon={["fas", "hand-paper"]} transform={{ rotate: -90 }} size='6x' />
          <p>Paper</p>
        </div>
      </Link>
      <Link to='/result'>
        <div
          onClick={() => {
            Switch({ game, setGame, setPlays }, "scissors")
          }}
        >
          <FontAwesomeIcon icon={["fas", "hand-scissors"]} size='6x' />
          <p>Scissors</p>
        </div>
      </Link>
    </main>
  )
}
