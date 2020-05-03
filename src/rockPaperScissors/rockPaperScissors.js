import React, { useState } from "react"
import { Router, Link } from "@reach/router"
import { Main } from "./main"
import { Aside } from "./aside"
import { reset } from "./reset"
import { Result } from "./result/result"
import { RoundTitle } from "./roundTitle"
import { ResultTitle } from "./result/resultTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome } from "@fortawesome/free-solid-svg-icons"
library.add(faHome)

export const RockPaperScissors = () => {
  const [plays, setPlays] = useState({
    choosen: "",
    bot: "",
    result: "",
  })
  const [game, setGame] = useState({
    round: 0,
    successful: 0,
    draw: 0,
    defeat: 0,
  })

  return (
    <div className='container'>
      <a href='https://wilk6.github.io' className='Back'>
        <FontAwesomeIcon icon={["fas", "home"]} size='3x' />
      </a>
      <Router className='Title'>
        <RoundTitle path='/project00' game={game} />
        <ResultTitle path='/result' plays={plays} />
      </Router>
      <Router className='Main'>
        <Main path='/project00' game={game} setGame={setGame} setPlays={setPlays} />
        <Result path='/result' plays={plays} />
      </Router>
      <Aside successful={game.successful} draw={game.draw} defeat={game.defeat} />
      <footer className='Reset'>
        <Link to='/project00'>
          <p onClick={() => reset({ game, setGame })}>Reset results</p>
        </Link>
      </footer>
    </div>
  )
}
