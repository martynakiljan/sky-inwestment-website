import { Slant as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Menu = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className='menu'>
			<div className='menu__inner'>
				<div className='menu__col'>
					<p>prosper Investment</p>
				</div>
				<div className='menu__col menu__col--right'>
					<div className='menu__lang'>EN</div>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</div>
		</div>
	)
}

export default Menu
