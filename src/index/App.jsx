import React from 'react'

import Header from '../components/Header'

function App(props) {

  const onBack = () => {

  }

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
    </div>
  )
}

export default App