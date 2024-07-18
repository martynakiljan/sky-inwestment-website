const Header = () => {
	return (
		<div className='header'>
			<div className='header__inner'>
				<h1 className='header__title'> Invest in Innovative Construction</h1>
				<h1 className='header__title header__subtitle'> The Future Starts Now</h1>

				<p className='header__text'>
					We focus on strategic investments in the construction sector, delivering comprehensive support for projects at
					every stage. With our extensive experience and cutting-edge strategies, we drive value and growth in every
					investment opportunity.
				</p>
				<div className='arrows__container'>
					<div id='app'>
						<div className='arrow arrowSliding delay1'></div>
						<div className='arrow arrowSliding delay2'></div>
						<div className='arrow arrowSliding delay3'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
