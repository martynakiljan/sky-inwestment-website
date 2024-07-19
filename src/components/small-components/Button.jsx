import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = ({ text }) => {
	return (
		<div className='button__container'>
			{text}
			<button className='button-icon'>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</div>
	)
}

export default Button
