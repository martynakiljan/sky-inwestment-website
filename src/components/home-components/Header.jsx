import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
	const [animationKey, setAnimationKey] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimationKey(prevKey => prevKey + 1)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='header'>
			<div className='header__inner'>
				<h1 className='header__title'>Invest in Innovative Construction</h1>
				<h1 className='header__title header__subtitle'>
					<TypeAnimation
						key={animationKey}
						sequence={['The Future Starts Now', 3000]}
						cursor={true}
						repeat={Infinity}
					/>
				</h1>
				<p className='header__text'>
					We focus on strategic investments in the construction sector, delivering comprehensive support for projects at
					every stage. With our extensive experience and cutting-edge strategies, we drive value and growth in every
					investment opportunity.
				</p>
				<div className='arrows__container'>
					<div id='app'>
						<div className='arrow arrowSliding delay1'></div>
						<div className='arrow arrowSliding delay2'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
