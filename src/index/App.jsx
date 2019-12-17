import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css'
import Header from '../components/Header'
import Submit from './components/Submit'
import HighSpeed from './components/HighSpeed'

import {
  toggleHighSpeed
} from './store/action'

function App(props) {
  const  {
    highSpeed,
    dispatch
  } = props


  const onBack = () => {

  }

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators({
      toggle: toggleHighSpeed
    },
     dispatch
    )
  }, [])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="/" className="form">
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs}/>
        <Submit name="搜索" />
      </form>
    </div>
  )
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(App)