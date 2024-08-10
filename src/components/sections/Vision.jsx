import visionImg1 from '../../assets/images/vision-1.jpg'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Vision = () => {
	return (
		<div className='vision section'>
			<div className='vision__col vison__col--left'>
				<h2 className='title'>Our Vision</h2>
				<h3 className='subtitle'>We Harness the Strength of Thoughtful Investments</h3>
				<p className='vision__text'>
					At our company, we believe that the future of cities is shaped by modern skyscrapers that not only define the
					urban skyline but also symbolize innovation and sustainable development. Our vision is to invest in top-tier
					skyscraper projects that blend architectural elegance with functionality and energy efficiency.
				</p>
				<NavLink to='/about' className='menu-item'>
					<Button text='About us' />
				</NavLink>
			</div>
			<div className='vision__col'>
				<img className='vision__image' src={visionImg1} alt='scyscaper' />
			</div>
		</div>
	)
}

export default Vision
