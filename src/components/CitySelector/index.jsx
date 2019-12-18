import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

const CitySelector = memo(function CitySelector(props) {
  const {
    show
  } = props
  return(
    <div className={classnames('city-selector', {
      hidden: !show
    })} >
      city
    </div>
  )
})

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired
}

export default CitySelector