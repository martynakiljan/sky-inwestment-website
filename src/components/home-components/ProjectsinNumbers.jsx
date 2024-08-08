import projectImg4 from '../../assets/images/project-1.jpg'
import projectImg5 from '../../assets/images/project-5.jpg'
import projectImg6 from '../../assets/images/project-6.jpg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const ProjectsInNumbers = () => {
	// Set up the intersection observer
	const { ref: refInvestments, inView: inViewInvestments } = useInView({ triggerOnce: true })
	const { ref: refInvestors, inView: inViewInvestors } = useInView({ triggerOnce: true })
	const { ref: refApartments, inView: inViewApartments } = useInView({ triggerOnce: true })

	return (
		<div className='projects-in-numbers'>
			<div className='project-in-numbers__col project-in-numbers__col--left'>
				<h2 className='title'>Our Projects in Numbers</h2>
				<h3 className='subtitle'>Together we can create a secure future and unlock new opportunities for growth.</h3>
			</div>
			<div className='project-in-numbers__col  project-in-numbers__col--right'>
				<div className='project-in-numbers__tile' ref={refInvestments}>
					<img className='project-in-numbers__img' src={projectImg4} alt='skyscraper' />
					<h5 className='project-in-numbers__number'>
						{inViewInvestments && <CountUp start={0} end={48} duration={2.5} prefix='+ ' />}
					</h5>
					<h6 className='project-in-numbers__description'>INVESTMENTS</h6>
				</div>
				<div className='project-in-numbers__tile' ref={refInvestors}>
					<img className='project-in-numbers__img' src={projectImg5} alt='skyscraper' />
					<h5 className='project-in-numbers__number'>
						{inViewInvestors && <CountUp start={0} end={22} duration={2.5} prefix='+ ' />}
					</h5>
					<h6 className='project-in-numbers__description'>INVESTORS</h6>
				</div>
				<div className='project-in-numbers__tile' ref={refApartments}>
					<img className='project-in-numbers__img' src={projectImg6} alt='skyscraper' />
					<h5 className='project-in-numbers__number'>
						{inViewApartments && <CountUp start={0} end={500} duration={2.5} prefix='+ ' />}
					</h5>
					<h6 className='project-in-numbers__description'>APARTMENTS</h6>
				</div>
			</div>
		</div>
	)
}

export default ProjectsInNumbers
