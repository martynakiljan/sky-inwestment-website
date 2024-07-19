import Header from '../home-components/Header'
import Projects from '../home-components/Projects'
import Vision from './Vision'
import BigImg from '../home-components/BigImg'
import Button from '../small-components/Button'
import ProjectsInNumbers from '../home-components/ProjectsinNumbers'

const Home = () => {
	return (
		<>
			<Header />
			<Projects />
			<Vision />
			<BigImg />
			<Button text="all projects"/>
			<ProjectsInNumbers />
		</>
	)
}

export default Home
