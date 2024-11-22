import './App.css'
import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Home searchQuery={searchQuery} /> 
      <Footer />
    </>
  );
}

export default App;
