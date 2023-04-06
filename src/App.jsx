import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import NewNavbar from './components/NewNavbar'
import CardContainer from './components/CardContainer';
import cards from './constants/cards';



const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NewNavbar />
      <div className="bg-gray-100 min-h-screen">
        <CardContainer cards={cards} />
      </div>
    </>
  )
}

export default App