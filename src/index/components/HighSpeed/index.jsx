import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './index.css'

function HighSpeed(props) {
  const { highSpeed, toggle } = props
  return (
    <div className="high-speed">
      <div className="high-speed-label">
        只看高铁/动车
      </div>
      <div className="high-speed-switch" onClick={() => toggle()}>
        <input type="hidden" name="highSpeed" value={highSpeed} />
        
      </div>
    </div>
  )
}

HighSpeed.propTypes = {
  highSpeed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default memo(HighSpeed)