import React from "react"
import { Link } from "@reach/router"
import { YourChoose } from "./yourChoose"
import { BotChoose } from "./botChoose"

export const Result = ({ plays }) => {
  return (
    <div className='Result'>
      <div>
        <YourChoose className='YourChoose' plays={plays} />
        <BotChoose plays={plays} />
      </div>
      <Link to='/'>
        <aside>
          <p>Play again</p>
        </aside>
      </Link>
    </div>
  )
}
