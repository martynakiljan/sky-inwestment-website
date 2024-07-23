import RoundedImage from '../home-components/RoundedImage'
import image1 from '../../assets/images/invest-1.jpg'
import image2 from '../../assets/images/invest-2.jpg'
import image3 from '../../assets/images/invest-3.jpg'

const Invest = () => {
	return (
		<div className='invest section'>
			<h1 className='title center tight'>ENHANCING YOUR FUTURE WITH STRATEGIC INVESTMENTS</h1>
			<p className='invest__description'>
				Founded in 2016, SCY Investment identifies and selects properties with the potential to generate significant
				returns for its investors.
			</p>
			<RoundedImage src={image1} />

			<h1 className='title center'>INVEST IN US</h1>
			<div className='invest__container'>
				<div className='invest__col invest__col--text'>
					Through the construction or reconstruction and ultimately the creation of modern bioclimatic buildings in
					urban areas of high commerciality, it creates capital surplus and ensures high returns for its investors.
				</div>
				<div className='invest__col invest__col--text'>
					The company`s expertise in real estate investments, combined with its extensive experience in the construction
					and real estate sectors, is a strong guarantee of success.
				</div>
			</div>
			<h1 className='title center'>WHY WITH US?</h1>

			<div className='invest__tiles'>
				<div className='invest__tile'>
					<div className='invest__num'>01</div>
					<h3 className='invest__title'>HIGH RETURNS ON INVESTMENT</h3>
					<p className='tile__description'>
						Investing in skyscrapers with SCY Investment offers the potential for substantial profits, leveraging the
						high demand and premium rents associated with prime urban real estate
					</p>
				</div>
				<div className='invest__tile'>
					<div className='invest__num'>02</div>
					<h3 className='invest__title'>STRATEGIC LOCATIONS</h3>
					<p className='tile__description'>
						Investing in skyscrapers with SCY Investment offers the potential for substantial profits, leveraging the
						high demand and premium rents associated with prime urban real estate
					</p>
				</div>
				<div className='invest__tile'>
					<div className='invest__num'>03</div>
					<h3 className='invest__title'>DIVERSIFIED PORTFOLIO</h3>
					<p className='tile__description'>
						We offer a well-balanced investment portfolio that mitigates risks and enhances stability, providing a
						secure and robust investment opportunity in the ever-evolving real estate market
					</p>
				</div>
				<div className='invest__tile'>
					<div className='invest__num'>04</div>
					<h3 className='invest__title'>EXPERTISE AND EXPERIENCE</h3>
					<p className='tile__description'>
						With years of experience and a team of industry experts, SCY Investment guarantees professional management
						and strategic planning, ensuring your investments are in capable hands.
					</p>
				</div>
			</div>

			<div className='invest__images'>
				<img className='invest__img' src={image2}></img>
				<img className='invest__img' src={image3}></img>
			</div>
		</div>
	)
}

export default Invest
