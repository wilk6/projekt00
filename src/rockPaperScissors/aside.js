import React from "react"

export const Aside = ({ successful, draw, defeat }) => {
  return (
    <aside className='Result--table'>
      <p>
        Successful: <br />
        <span>{successful}</span>
      </p>
      <p>
        Draw: <br />
        <span>{draw}</span>
      </p>
      <p>
        Defeat: <br />
        <span>{defeat}</span>
      </p>
    </aside>
  )
}
