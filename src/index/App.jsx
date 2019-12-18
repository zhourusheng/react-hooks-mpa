import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css'
import Header from '../components/Header'
import Submit from './components/Submit'
import HighSpeed from './components/HighSpeed'
import Journey from './components/Journey'
import DepartDate from './components/DepartDate'

import {
  toggleHighSpeed,
  exchangeFromTo,
  showCitySelector,
  showDateSelector,
} from './store/action'

function App(props) {
  const  {
    highSpeed,
    dispatch,
    from,
    to,
    departDate
  } = props


  const onBack = () => {

  }

  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo,
      showCitySelector
    },
      dispatch
    )
  }, [dispatch])

  const departDateCbs = useMemo(() => {
    return bindActionCreators({
      onClick: showDateSelector
    },
      dispatch
    )
  }, [dispatch])

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators({
      toggle: toggleHighSpeed
    },
     dispatch
    )
  }, [dispatch])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="/" className="form">
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs}/>
        <Submit name="搜索" />
      </form>
    </div>
  )
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(App)