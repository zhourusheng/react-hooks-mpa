import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Submit(props) {
  const { name } = props
  return (
    <div className="submit">
      <button type="submit" className="submit-button">
        {name}
      </button>
    </div>
  )
}

Submit.propTypes = {
  name: PropTypes.string.isRequired
}

export default memo(Submit)