import Header from '../home-components/Header'
import Projects from '../home-components/Projects'
import Vision from './Vision'
import RoundedImage from '../home-components/RoundedImage'
import Button from '../small-components/Button'
import ProjectsInNumbers from '../home-components/ProjectsinNumbers'
import image from '../../assets/images/invest-1.jpg'
import image2 from '../../assets/images/invest-4.jpg'

const Home = () => {
	return (
		<>
			<Header />
			<Projects />
			<Vision />
			<RoundedImage src={image} />
			<Button text='all projects' />
			<ProjectsInNumbers />
			<RoundedImage src={image2} />
		</>
	)
}

export default Home
