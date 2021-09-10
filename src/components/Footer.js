import React from 'react';

class Footer extends React.Component {
	state = {date :''};
	componentDidMount(){
		let n =  new Date();
   		let y = n.getFullYear();
   		this.setState({date : y});
	}
	scrollHome(){
		let tag = document.getElementById('home');
		tag.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	mouseOver(event){
		event.preventDefault();
		event.target.style.color =  "#fff";	
	}
	mouseOut(event){
		event.preventDefault();
		event.target.style.color =  "#525252";
	}
	overGoTop(event){
		event.preventDefault();
		event.target.style.color = "#0F9095";
	}
	overGoTop(event){
		event.preventDefault();
		event.target.style.backgroundColor = "#0F9095";
	}
	outGoTop(event){
		event.preventDefault();
		event.target.style.backgroundColor = "#525252";
	}
	questionMouseOver(event){
		event.preventDefault();
		event.target.title = "Milad pegah";
		event.target.style.color = "#5C4033";
		event.target.style.cursor = 'pointer';
	}
	questionMouseOut(event){
		event.preventDefault();
		event.target.style.color = "#303030";
	}

	render() {
		return(
			<footer>

		      <div className="row">

		         <div className="twelve columns">

		            <ul className="social-links">
		               <li onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}><a href="https://github.com/Miladpegah"><i className="fa fa-github"></i></a></li>
		               <li onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}><a href="https://ir.linkedin.com/in/milad-pegah-17a355210"><i className="fa fa-linkedin"></i></a></li>
		               <li onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}><a href="https://www.instagram.com/milad.pegah071shz/"><i className="fa fa-instagram"></i></a></li>
		               <li onMouseOver={ this.mouseOver} onMouseOut={ this.mouseOut}><a href="https://stackoverflow.com/users/11293397/milad-pegah"><i className="fa fa-stack-overflow"></i></a></li>
		            </ul>

		            <ul className="copyright">
		               <li>Code, design and copy by: 
		               <i onMouseOver={ this.questionMouseOver} onMouseOut={ this.questionMouseOut}>(who do you think?)</i>
		               <br/> &copy; Copyright <i>{ this.state.date }</i> Miladpegah</li>   
		            </ul>

		         </div>

		         <div id={ 'go-top' }><a className="smoothscroll" title="Back to Top" onMouseOver={ this.overGoTop} onMouseOut={ this.outGoTop} onClick={ this.scrollHome} title="Scroll down"><i className="icon-up-open"></i></a></div>

		      </div>

		   </footer>  
		);
	}
}

export default Footer;