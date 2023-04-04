import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <div className={`${styles.flexCenter} w-full bg-primary text-white`}>

      <div>

      <div className='hidden md:block' >pc</div>
      <div className='md:hidden' >mobile</div>

      </div>
    </div>
    </>
  )
}

export default App