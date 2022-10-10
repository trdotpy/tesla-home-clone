import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Account from './components/Account'

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Hero />
                            </>
                        }
                    />

                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
