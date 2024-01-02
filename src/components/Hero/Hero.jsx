import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
	return (
		<section className='hero-wrapper'>
			<div className='paddings innerWidth flexCenter  hero-container '>
				{/* LEFT SIDE */}
				<div className='flexColStart hero-left'>
					<div className='hero-title'>
						<div className="orange-circle"/>
						<h1>
							Discover <br />
							Most Suitable <br />
							Property
						</h1>
					</div>

					<div className='flexColStart hero-des'>
						<span>Find a veriety of properties that suit you very easily</span>
						<span>Forget all difficulties in finding a residence for you</span>
					</div>

					<div className="flexCenter search-bar">
						<HiLocationMarker color='var(--blue)' size={25} />
						<input type="text" />
						<button className="button">Search</button>
					</div>

					<div className="flexCenter stats">
						<div className="flexColStart stat">
							<span><CountUp start={88000} end={90000} duration={4}/>
							<span>+</span>
							</span>
							<span>Premium Products</span>
						</div>
						<div className="flexColStart stat">
							<span><CountUp start={88000} end={90000} duration={4}/>
							<span>+</span>
							</span>
							<span>Premium Products</span>
						</div>
					</div>
				</div>
				{/* RIGHT SIDE */}
				<div className='flexCenter hero-right'>
					<div className='image-container'>
						<img src='./macos.jpg' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
