import teamImg from '../../assets/images/team.jpg'

const About = () => {
	return (
		<div className='about-container'>
			<div className='about-column'>
				<h2 className='title'>About Us</h2>
				<p>
					Our company specializes in designing and constructing modern skyscrapers that are not only visually impressive
					but also functional and sustainable. With our experience and innovative approach, we deliver solutions that
					exceed our clients expectations.
				</p>
				<p>
					Our team of experts is dedicated to creating buildings that meet the challenges of the modern world, including
					sustainability and energy efficiency. Our projects are a testament to our passion for excellence and
					innovation in architecture and construction.
				</p>
			</div>
			<div className='about-column'>
				<h2 className='title'>Our Mission</h2>
				<p>
					Our mission is to create spaces that combine aesthetics with functionality while considering environmental
					needs. We believe that every project should have a positive impact on the community and its surroundings.
				</p>
				<p>
					We strive to be a leader in the construction industry by offering innovative solutions that benefit our
					clients and society as a whole. Our values include responsibility, transparency, and commitment in every
					aspect of our work.
				</p>
			</div>
			<blockquote className='about-quote'>
				<p>
					"Building the future starts with a vision. Our goal is to transform that vision into landmarks of excellence."
				</p>
				<footer>— John Doe, CEO</footer>
			</blockquote>
			<div className='team-section'>
				<div className='team-text'>
					<h2 className='title'>Our Team</h2>
					<p>
						Our team is composed of highly skilled professionals with a passion for architecture and engineering. We
						work together to bring innovative ideas to life, ensuring the success of each project through collaboration
						and expertise.
					</p>
				</div>
				<div className='team-image'>
					<img src={teamImg} alt='Our Team' />
				</div>
			</div>
		</div>
	)
}

export default About
