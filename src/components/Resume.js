import React from 'react';
import Education from './Education';
import Skills from './Skills';
import ArticlesAndProjects from './ArticlesAndProjects';
import WorkExprince from './WorkExprince';


class Resume extends React.Component {
	render() {
		return (
			<section id={"resume"}>
			    <Education/>
				<Skills/>			      
				<WorkExprince/>
				<ArticlesAndProjects/>
			   </section>
			);
	}
}

export default Resume; 