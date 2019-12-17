import React from 'react'

import Header from '../components/Header'
import Submit from './components/Submit'

function App(props) {

  const onBack = () => {

  }

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="/">
        <Submit name="搜索" />
      </form>
    </div>
  )
}

export default App