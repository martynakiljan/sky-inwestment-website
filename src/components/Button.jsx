import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = () => {
	return (
		<div className='button__container'>
			All completed projects{' '}
			<button className='button-icon'>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</div>
	)
}

export default Button
