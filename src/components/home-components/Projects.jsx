import projectImg1 from '../../assets/images/project-1.jpg'
import projectImg2 from '../../assets/images/project-2.jpg'
import projectImg3 from '../../assets/images/project-3.jpg'

const Projects = () => {
	return (
		<div className='projects section'>
			<div className='projects__inner'>
				<div className='project'>
					<img className='project__image' src={projectImg1} alt='scyscaper' />
				</div>
				<div className='project'>
					<img className='project__image' src={projectImg2} alt='scyscaper' />
				</div>
				<div className='project'>
					<img className='project__image' src={projectImg3} alt='scyscaper' />
				</div>
			</div>
		</div>
	)
}

export default Projects
