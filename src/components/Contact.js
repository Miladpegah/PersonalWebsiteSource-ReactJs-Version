import React from 'react';


class Contact extends React.Component {
	mouseOver(event){
		event.preventDefault();
		event.target.style.color =  "#fff";	
	}
	mouseOut(event){
		event.preventDefault();
		event.target.style.color =  "#11ABB0";
	}

	render() {
		return(
			<section id={ "contact" }>

		         <div className="row section-head">
		            <h2 style={{  textAlign:'center' }}>
		               Contact with me
		            </h2>
		            <div style={{ textAlign: 'center', paddingTop: '5%' }} onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}>
		                  <a href="miladpegah@gmail.com">
		                     <span>
		                        Get In Touch to email me.
		                     </span>
		                     <h1 style={{ paddingLeft: '45%' }}>
		                     </h1> 
		                  </a>

		            </div>

		         </div>

		   </section>
		);
	}
}

export default Contact;