import './App.css'
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import Hero from './components/Hero'

function App() {
    return (
        <Router>
            <div className='app'>
                <Header />
                <Hero />
            </div>
        </Router>
    )
}

export default App
