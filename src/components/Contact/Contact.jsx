import React from 'react'
import './Contact.css'

const Contact = () => {
	return (
		<section className='c-wrapper'>
			<div className='paddings innerWidth flexCenter c-container'>
				{/* tem dois lados novamente*/}
				{/* left side */}
				<div className='flexColStart c-left'>
					<span className='orangeText'>Our Contacts</span>
					<span className='primaryText'>Easy to Contact us</span>
					<span className='secondaryText'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ab inventore
						aliquid.
					</span>
				</div>

				{/* Right side */}
				<div className='c-right'>
					<div className='image-container'>
						<img src='./contact.jpg' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
