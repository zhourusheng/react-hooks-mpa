import React, { memo, useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

/**
 * CityList
 * */ 

const CityList = memo(function CityList(props) {
  const { sections, toAlpha, onSelect } = props
  return(
    <div>

    </div>
  )
})

CityList.propTypes = {
  sections: PropTypes.array.isRequired,
  toAlpha: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

/**
 * CitySelector
 * */ 

const CitySelector = memo(function CitySelector(props) {
  const {
    show,
    onBack,
    isLoading,
    cityData,
    fetchCityData,
    onSelect
  } = props

  const [searchKey, setSearchKey] = useState('')

  const key = useMemo(() => searchKey.trim(), [searchKey])

  // useEffect
  useEffect(() => {
    if (!show || cityData || isLoading) {
      return
    }
    // fetchCityData()
  }, [show, cityData, isLoading])

  const outputCitySections = () => {
    if (isLoading) {
      return <div>loading...</div>
    }

    if (cityData) {
      return(
        <CityList />
      )
    }

    return <div>error</div>
  }

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
      {outputCitySections()}
    </div>
  )
})

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default CitySelector