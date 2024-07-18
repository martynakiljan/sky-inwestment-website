import projectImg4 from '../assets/images/project-4.jpg'
import projectImg5 from '../assets/images/project-5.jpg'
import projectImg6 from '../assets/images/project-6.jpg'

const ProjectsInNumbers = () => {
	return (
		<div className='projects-in-numbers'>
			<div className='project-in-numbers__col project-in-numbers__col--left'>
				<h2 className='title'>Our Projects in Numbers</h2>
				<h3 className='subtitle'>Together we can create a secure future and unlock new opportunities for growth.</h3>
			</div>
			<div className='project-in-numbers__col  project-in-numbers__col--right'>
				<div className='project-in-numbers__tile'>
					<img className='project-in-numbers__img' src={projectImg4} alt='scyscaper' />
					<h5 className='project-in-numbers__number'>+ 48</h5>
					<h6 className='project-in-numbers__description'>INVESTMENTS</h6>
				</div>
				<div className='project-in-numbers__tile'>
					<img className='project-in-numbers__img' src={projectImg5} alt='scyscaper' />
					<h5 className='project-in-numbers__number'>+ 42</h5>
					<h6 className='project-in-numbers__description'>INVESTORS</h6>
				</div>
				<div className='project-in-numbers__tile'>
					<img className='project-in-numbers__img' src={projectImg6} alt='scyscaper' />
					<h5 className='project-in-numbers__number'>+ 500</h5>
					<h6 className='project-in-numbers__description'>TOTAL NO. OF APARTMENTS </h6>
				</div>
			</div>
		</div>
	)
}

export default ProjectsInNumbers
