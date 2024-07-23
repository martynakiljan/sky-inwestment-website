import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		console.log(data)
		// You can handle form submission here
	}

	return (
		<div className='contact-container'>
			<div className='contact-form'>
				<h2 className='title'>Contact Us</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='form-group'>
						<label htmlFor='name'>Name</label>
						<input id='name' type='text' {...register('name', { required: 'Name is required' })} />
						{errors.name && <p className='error-message'>{errors.name.message}</p>}
					</div>

					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input id='email' type='email' {...register('email', { required: 'Email is required' })} />
						{errors.email && <p className='error-message'>{errors.email.message}</p>}
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea id='message' {...register('message', { required: 'Message is required' })}></textarea>
						{errors.message && <p className='error-message'>{errors.message.message}</p>}
					</div>
					<button type='submit'>Send</button>
				</form>
			</div>
			<div className='contact-info'>
				<h2 className='title'>Get in Touch</h2>
				<p>
					<strong>Phone:</strong> +1 (555) 123-4567
				</p>
				<p>
					<strong>Address:</strong> 123 Skyscraper Lane, Suite 400, Metropolis, NY 10001
				</p>
				<div className='social social-contact'>
					<a className='social__icon' href='https://www.google.com'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a className='social__icon' href='https://www.google.com'>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a className='social__icon' href='https://www.google.com'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contact
