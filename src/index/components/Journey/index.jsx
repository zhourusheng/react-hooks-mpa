import React from 'react'
import PropTypes from 'prop-types'
import switchImg from '../../img/switch.svg'
import './index.css'

function Journey(props) {
  const { from, to, exchangeFromTo, showCitySelector } = props

  return(
    <div className="journey">
      <div className="journey-station" onClick={() => showCitySelector(true)}>
        <input
          type="text"
          value={from}
          name="from"
          readOnly
          className="journey-input journey-from"
        />
      </div>
      <div className="journey-switch" onClick={() => exchangeFromTo()}>
        <img src={switchImg} alt="switch" width="70" height="40" />
      </div>
      <div className="journey-station" onClick={() => showCitySelector(false)}>
        <input
          type="text"
          value={to}
          name="to"
          readOnly
          className="journey-input journey-to"
        />
      </div>
    </div>
  )
}

Journey.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exchangeFromTo: PropTypes.func.isRequired,
  showCitySelector: PropTypes.func.isRequired
}

export default Journey