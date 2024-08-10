import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = ({ text }) => {
	return (
		<button className='button__container'>
			{text}
			<div className='button-icon'>
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
		</button>
	)
}

export default Button
