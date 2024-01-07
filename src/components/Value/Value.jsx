import React, { useState, useEffect } from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
	return (
		<section className='v-wrapper'>
			<div className='paddings innerWidth flexCenter v-container'>
				{/* aqui a gente tem 2 seções, left section (img) e right */}
				{/* left side */}
				<div className='v-left'>
					<div className='image-container'>
						<img src='./value.png' alt='' />
					</div>
				</div>
				{/* right side */}

				<div className='flexColStart v-right'>
					<span className='orangeText'>Our Value</span>
					<span className='primaryText'>Value Wwe Give to You</span>
					<span className='secondaryText'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
						Veritatis vitae facere expedita maxime officiis maiores.
					</span>

					<Accordion
						className='accordion'
						allowMultipleExpanded={false} //pra deixar vários expandidos
						preExpanded={[0]} //para deixar pre aberto alguem
					>
						{data.map((item, i) => {
    const [className, setClassName] = useState(null);

    useEffect(() => {
        // Este efeito será acionado após a renderização, evitando o problema de setState durante a renderização.
        setClassName(item.expanded ? 'expanded' : 'collapsed');
    }, [item.expanded]);

    return (
        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
            <AccordionItemHeading>
                <AccordionItemButton className='flexCenter accordionButton'>
                    <AccordionItemState>
                        {({ expanded }) => (
                            <React.Fragment>
                                <div className='flexCenter icon'>{item.icon}</div>
                                <span className='primaryText'>{item.heading}</span>
                                <div className='flexCenter icon'>
                                    <MdOutlineArrowDropDown size={20} />
                                </div>
                            </React.Fragment>
                        )}
                    </AccordionItemState>
                </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
                <p className='secondaryText'>{item.detail}</p>
            </AccordionItemPanel>
        </AccordionItem>
    );
})}
					</Accordion>
				</div>
			</div>
		</section>
	)
}

export default Value
