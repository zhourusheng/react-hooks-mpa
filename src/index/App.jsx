import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css'
import Header from '../components/Header'
import Submit from './components/Submit'
import HighSpeed from './components/HighSpeed'
import Journey from './components/Journey'
import DepartDate from './components/DepartDate'

import CitySelector from '../components/CitySelector'

import {
  toggleHighSpeed,
  exchangeFromTo,
  showCitySelector,
  showDateSelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity
} from './store/action'

function App(props) {
  const {
    highSpeed,
    dispatch,
    from,
    to,
    departDate,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData
  } = props

  const onBack = () => {}

  const cbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    )
  }, [dispatch])

  const departDateCbs = useMemo(() => {
    return bindActionCreators(
      {
        onClick: showDateSelector
      },
      dispatch
    )
  }, [dispatch])

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggle: toggleHighSpeed
      },
      dispatch
    )
  }, [dispatch])

  const citySelectorCbs = useMemo(() => {
   return bindActionCreators(
     {
      onBack: hideCitySelector,
      fetchCityData,
      onSelect: setSelectedCity
     },
     dispatch
   ) 
  }, [dispatch])

  return (
    <div>
      <div className='header-wrapper'>
        <Header title='火车票' onBack={onBack} />
      </div>
      <form action='/' className='form'>
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />
        <Submit name='搜索' />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
    </div>
  )
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(App)
