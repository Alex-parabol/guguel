import React, {useState} from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Routes from './components/Routes'

const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div classname={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-500">
            <Navbar/>
            <Footer/>
            <Routes/>
            </div>
        </div>
    )
}

export default App
