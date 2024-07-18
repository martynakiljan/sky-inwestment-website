import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import Projects from './components/Projects'
import Vision from './components/Vision'
import BigImg from './components/BigImg'
import Button from './components/Button'
import ProjectsInNumbers from './components/ProjectsinNumbers'

function App() {
	return (
		<div className='App'>
			<Menu />
			<Header />
			<Projects />
			<Vision />
			<BigImg />
			<Button />
			<ProjectsInNumbers />
		</div>
	)
}

export default App
