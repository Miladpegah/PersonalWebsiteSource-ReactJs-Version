import React from 'react';


class Advice extends React.Component {
	render() {
		return(
			<section id={ "testimonials" }>

		      <div className="text-container">

		         <div className="row">

		            <div className="two columns header-col">

		               <h1><span>Client Testimonials</span></h1>

		            </div>

		            <div className="ten columns flex-container">

		               <div className="flexslider">
		                  <blockquote>
		                     <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is
		                           to do what you believe is great work. And the only way to do great work is to love what you do.
		                           If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
		                     </p>
		                     <cite>Steve Jobs</cite>
		                  </blockquote>
		               </div>
		            </div>

		         </div>

		       </div>

		   </section>
		);
	}
}

export default Advice;