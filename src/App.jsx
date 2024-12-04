import { useState } from 'react'
import Navbar from './components/Navbar'

import ExtraList from './components/ExtraList'
import PizzaList from './components/PizzaList'
import MainPage from './components/MainPage'




export default function App() {

  const [pageControl, setPageControl] = useState(1)

  function changePageMain() {
    setPageControl(1)
  }

  function changePagePizza() {
    setPageControl(2)
  }

  function changePageExtra() {
    setPageControl(3)
  }

  let comment;

  switch (pageControl) {
    case 1:
      comment = <MainPage />
      break;

    case 2:
      comment = <PizzaList />
      break;

    default:
      comment = <ExtraList />
      break;
  }

  return (
    <div className="mainContainer">
      <Navbar chngMain={changePageMain} chngPizza={changePagePizza} chngExtra={changePageExtra} />
      <div className="mt-4">
        {
          comment
        }
      </div>
    </div>


  )
}

