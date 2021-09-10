import React from 'react';



class Header extends React.Component {
	scrollHome(){
		let tag = document.getElementById('home');
		tag.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	scrollResume(){
		let tag = document.getElementById('resume');
		tag.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	scrollAbout(){
		let tag = document.getElementById('about');
		tag.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	scrollTestimonials(){
		let tag = document.getElementById('testimonials');
		tag.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	scrollContact(){
		let tag = document.getElementById('contact');
		tag.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}
	mouseOver(event){
		event.preventDefault();
		event.target.style.color =  "#11ABB0";
	}
	mouseOut(event){
		event.preventDefault();
		event.target.style.color =  "#fff";	
	}
	linkMouseOver(event){
		event.preventDefault();
		event.target.style.color =  "#F06000";
		event.target.style.cursor = 'pointer';	
	}
	linkMouseOut(event){
		event.preventDefault();
		event.target.style.color =  "#fff";	
	}
	homeMouseOver(event){
		event.preventDefault();
		event.target.style.color =  "#fff";	
		event.target.style.cursor = 'pointer';
	}
	homeMouseOut(event){
		event.preventDefault();
		event.target.style.color =  "#F06000";	
	}
	render(){
		return (
			<header id={ "home" }>

		      <nav id={ "nav-wrap" }>

		         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
		        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

		         <ul id={ "nav" } className="nav">
		            <li className="current"><a className="smoothscroll" onMouseOver={ this.homeMouseOver} onMouseOut={ this.homeMouseOut} onClick={ this.scrollHome }>Home</a></li>
		           	<li><a className="smoothscroll" onMouseOver={ this.linkMouseOver} onMouseOut={ this.linkMouseOut} onClick={ this.scrollResume }>Resume</a></li>
		            <li><a className="smoothscroll" onMouseOver={ this.linkMouseOver} onMouseOut={ this.linkMouseOut} onClick={ this.scrollAbout }>About</a></li>
		            <li><a className="smoothscroll" onMouseOver={ this.linkMouseOver} onMouseOut={ this.linkMouseOut} onClick={ this.scrollTestimonials }>Testimonials</a></li>
		            <li><a className="smoothscroll" onMouseOver={ this.linkMouseOver} onMouseOut={ this.linkMouseOut} onClick={ this.scrollContact }>Contact</a></li>
		         </ul>

		      </nav>

		      <div className="row banner">
		         <div className="banner-text">
		            <h1 className="responsive-headline">Mohamad Reza Pegah</h1>
		            <h2>(Milad Pegah)</h2>
		            <h3>I'm a software Enginer,<span>web Developer</span> and <span>web Designer</span> creating awesome and identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
		            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
		            <hr />
		            <ul className="social">
		               <li onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}><a href="https://github.com/Miladpegah"><i className="fa fa-github"></i></a></li>
		               <li onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}><a href="https://ir.linkedin.com/in/milad-pegah-17a355210"><i className="fa fa-linkedin"></i></a></li>
		               <li onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}><a href="https://www.instagram.com/milad.pegah071shz/"><i className="fa fa-instagram"></i></a></li>
		               <li onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}><a href="https://stackoverflow.com/users/11293397/milad-pegah"><i className="fa fa-stack-overflow"></i></a></li>
		            </ul>
		         </div>
		      </div>

		      <p className="scrolldown">
		         <a onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut} className="smoothscroll" onClick={ this.scrollContact} title="Scroll down"><i className="icon-down-circle"></i></a>
		      </p>

		   </header>
		   );
	}
}

export default Header;