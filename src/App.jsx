import './App.css'

import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
// import Content from './components/Content'
import LeftSidebar from './components/LeftSidebar'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Content/> */}
      <LeftSidebar/>
      <Footer/>
    </>
  )
}

export default App
