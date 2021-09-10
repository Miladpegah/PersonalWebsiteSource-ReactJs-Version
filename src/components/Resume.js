import React from 'react';
import Education from './Education';
import Skills from './Skills';


class Resume extends React.Component {
	render() {
		return (
			<section id={"resume"}>
			    <Education/>
				<Skills/>			      

			   </section>
			);
	}
}

export default Resume; 