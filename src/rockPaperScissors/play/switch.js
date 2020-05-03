export const Switch = ({ game, setGame, setPlays }, type) => {
  let random = Math.floor(Math.random() * (0 + 3))
  switch (type) {
    case "rock":
      if (random === 0) {
        setPlays({
          choosen: "rock",
          bot: "rock",
          result: "draw",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful,
          draw: game.draw + 1,
          defeat: game.defeat,
        })
      } else if (random === 1) {
        setPlays({
          choosen: "rock",
          bot: "paper",
          result: "defeat",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful,
          draw: game.draw,
          defeat: game.defeat + 1,
        })
      } else if (random === 2) {
        setPlays({
          choosen: "rock",
          bot: "scissors",
          result: "successful",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful + 1,
          draw: game.draw,
          defeat: game.defeat,
        })
      }
      break
    case "scissors":
      if (random === 2) {
        setPlays({
          choosen: "scissors",
          bot: "scissors",
          result: "draw",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful,
          draw: game.draw + 1,
          defeat: game.defeat,
        })
      } else if (random === 0) {
        setPlays({
          choosen: "scissors",
          bot: "rock",
          result: "defeat",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful,
          draw: game.draw,
          defeat: game.defeat + 1,
        })
      } else if (random === 1) {
        setPlays({
          choosen: "scissors",
          bot: "paper",
          result: "successful",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful + 1,
          draw: game.draw,
          defeat: game.defeat,
        })
      }
      break
    case "paper":
      if (random === 1) {
        setPlays({
          choosen: "paper",
          bot: "paper",
          result: "draw",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful,
          draw: game.draw + 1,
          defeat: game.defeat,
        })
      } else if (random === 2) {
        setPlays({
          choosen: "paper",
          bot: "scissors",
          result: "defeat",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful,
          draw: game.draw,
          defeat: game.defeat + 1,
        })
      } else if (random === 0) {
        setPlays({
          choosen: "paper",
          bot: "rock",
          result: "successful",
        })
        setGame({
          round: game.round + 1,
          successful: game.successful + 1,
          draw: game.draw,
          defeat: game.defeat,
        })
      }
      break
    default:
      break
  }
}
