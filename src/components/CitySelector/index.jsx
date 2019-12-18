import React, { memo, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

const CitySelector = memo(function CitySelector(props) {
  const { show, onBack } = props

  const [searchKey, setSearchKey] = useState('')

  const key = useMemo(() => searchKey.trim(), [searchKey])

  return (
    <div
      className={classnames('city-selector', {
        hidden: !show
      })}
    >
      <div className='city-search'>
        <div className='search-back' onClick={() => onBack}>
          <svg width='42' height='42'>
            <polyline
              points='25,13 16,21 25,29'
              stroke='#fff'
              strokeWidth='2'
              fill='none'
            />
          </svg>
        </div>
        <div className='search-input-wrapper'>
          <input
            type='text'
            value={searchKey}
            className='search-input'
            placeholder='城市、车站的中文或拼音'
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <i
          onClick={() => setSearchKey('')}
          className={classnames('search-clean', {
            hidden: !key.length
          })}
        >
          &#xf063;
        </i>
      </div>
    </div>
  )
})

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired
}

export default CitySelector