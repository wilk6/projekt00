import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHandRock, faHandPaper, faHandScissors } from "@fortawesome/free-solid-svg-icons"

library.add(faHandRock, faHandPaper, faHandScissors)

export const BotChoose = ({ plays }) => {
  switch (plays.bot) {
    case "rock":
      return (
        <div>
          <FontAwesomeIcon icon={["fas", "hand-rock"]} transform={{ rotate: -90 }} size='6x' />
          <p>Rock</p>
        </div>
      )

    case "paper":
      return (
        <div>
          <FontAwesomeIcon icon={["fas", "hand-paper"]} transform={{ rotate: -90 }} size='6x' />
          <p>Paper</p>
        </div>
      )

    case "scissors":
      return (
        <div>
          <FontAwesomeIcon icon={["fas", "hand-scissors"]} size='6x' />
          <p>Scissors</p>
        </div>
      )

    default:
      break
  }
}
