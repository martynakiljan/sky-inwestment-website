import './App.css'
import Menu from './components/home-components/Menu'
import Footer from './components/Footer'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Realizations from './components/sections/Realizations'
import Contact from './components/sections/Contact'
import Invest from './components/sections/Invest'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='App'>
				<Menu />
				<Routes>
					<Route exact path='/'>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/realisations' element={<Realizations />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/invest' element={<Invest />} />
					</Route>
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
