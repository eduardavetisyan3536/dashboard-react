import React from 'react'
import Logo from './Logo'
import thisAside from './Aside.module.css'
import Dashboard from './Dashboard'
import Manegment from './Managment'
import Apps from './Apps'

const Aside = () => {
  return (
    <div className={thisAside.aside}>
      <Logo/>
      <Dashboard />
      <Manegment />
      <Apps />
    </div>
  )
}

export default Aside
