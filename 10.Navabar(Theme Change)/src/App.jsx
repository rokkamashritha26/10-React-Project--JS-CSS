import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './components/navbar'
import navbar from './components/nav';


const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme: 'light');
  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  },[theme])
  return (
    <><div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div><navbar /></>
    
  
  )
}

export default App