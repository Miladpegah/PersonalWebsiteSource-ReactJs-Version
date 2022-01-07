import React from 'react';


class Skills extends React.Component {
	componentDidMount(){
		let phpSkill = 100;
		let laravelSkill = 100;
		let javascriptSkill = 50;
		let jquerySkill = 85;
		let reactSkill = 50;
		let livewireSkill = 75;
		let htmlCssSkill = 60;
		let databaseSkill = 90;
		let gitSkill = 95;
		let unixSkill = 50;

		let persianSkill = 100;
		let englishSkill = 80;


		let phpAnimation = setInterval(php, 25);
		let laravelAnimation = setInterval(laravel, 25);
		let javascriptAnimation = setInterval(javascript, 25);
		let jqueryAnimation = setInterval(jquery, 25);
		let reactAnimation = setInterval(react, 25);
		let livewireAnimation = setInterval(livewire, 25);
		let htmlCssAnimation = setInterval(htmlCss, 25);
		let databaseAnimation = setInterval(database, 25);
		let gitAnimation = setInterval(git, 25);
		let unixAnimation = setInterval(unix, 25);
		let persianAnimation = setInterval(persian, 25);
		let englishAnimation = setInterval(english, 25);
		


		let width = {
			php : 0,
			laravel : 0,
			javascript : 0,
			jquery : 0,
			react : 0,
			livewire : 0,
			htmlCss :0,
			database :0,
			git :0,
			unix :0,
			persian :0,
			english :0,
		};

		function php(){
			let tag = document.getElementById('php');
			if (width.php === phpSkill) {
				clearInterval(phpAnimation);
			}else{
				width.php++;
				tag.style.width = width.php + '%';

			}
		}

		function laravel(){
			let tag = document.getElementById('laravel');
			if (width.laravel === laravelSkill) {
				clearInterval(laravelAnimation);
			}else{
				width.laravel++;
				tag.style.width = width.laravel + '%';

			}
		}

		function javascript(){
			let tag = document.getElementById('javascript');
			if (width.javascript === javascriptSkill) {
				clearInterval(javascriptAnimation);
			}else{
				width.javascript++;
				tag.style.width = width.javascript + '%';

			}
		}

		function jquery(){
			let tag = document.getElementById('jquery');
			if (width.jquery === jquerySkill) {
				clearInterval(jqueryAnimation);
			}else{
				width.jquery++;
				tag.style.width = width.jquery + '%';

			}
		}

		function react(){
			let tag = document.getElementById('react');
			if (width.react === reactSkill) {
				clearInterval(reactAnimation);
			}else{
				width.react++;
				tag.style.width = width.react + '%';

			}
		}

		function livewire(){
			let tag = document.getElementById('livewire');
			if (width.livewire === livewireSkill) {
				clearInterval(livewireAnimation);
			}else{
				width.livewire++;
				tag.style.width = width.livewire + '%';

			}
		}
		function htmlCss(){
			let tag = document.getElementById('htmlCss');
			if (width.htmlCss === htmlCssSkill) {
				clearInterval(htmlCssAnimation);
			}else{
				width.htmlCss++;
				tag.style.width = width.htmlCss + '%';

			}
		}

		function database(){
			let tag = document.getElementById('database');
			if (width.database === databaseSkill) {
				clearInterval(databaseAnimation);
			}else{
				width.database++;
				tag.style.width = width.database + '%';

			}
		}

		function git(){
			let tag = document.getElementById('git');
			if (width.git === gitSkill) {
				clearInterval(gitAnimation);
			}else{
				width.git++;
				tag.style.width = width.git + '%';

			}
		}

		function unix(){
			let tag = document.getElementById('unix');
			if (width.unix === unixSkill) {
				clearInterval(unixAnimation);
			}else{
				width.unix++;
				tag.style.width = width.unix + '%';

			}
		}

		function persian(){
			let tag = document.getElementById('persian');
			if (width.persian === persianSkill) {
				clearInterval(persianAnimation);
			}else{
				width.persian++;
				tag.style.width = width.persian + '%';

			}
		}

		function english(){
			let tag = document.getElementById('english');
			if (width.english === englishSkill) {
				clearInterval(englishAnimation);
			}else{
				width.english++;
				tag.style.width = width.english + '%';

			}
		}
	}

	render() {
		return (
			<div className="row skill">

			         <div className="three columns header-col">
			            <h1><span>Skills/Languages</span></h1>
			         </div>

			         <div className="nine columns main-col">

			            <div className="bars">

			               <h1>Skils:</h1>
			               <ul className="skills">
			                  <li><span id={ 'php' } className="bar-expand php" ></span><em>PHP</em></li>
			                  <li><span id={ 'laravel' } className="bar-expand php"></span><em>LARAVEL</em></li>
			                  <li><span id={ 'javascript' } className="bar-expand javascript"></span><em>JAVASCRIPT</em></li>
			                  <li><span id={ 'jquery' } className="bar-expand jquery"></span><em>JQuery</em></li>
			                  <li><span id={ 'react' } className="bar-expand react"></span><em>REACT js</em></li>
			                  <li><span id={ 'livewire' } className="bar-expand livewire"></span><em>LIVEWIRE</em></li>
			                  <li><span id={ 'htmlCss' } className="bar-expand css"></span><em>HTML + CSS + @less + @sass</em></li>
			                  <li><span id={ 'database' } className="bar-expand html5"></span><em>DATABSE & SQL</em></li>
			                  <li><span id={ 'git' } className="bar-expand git"></span><em>GIT & GIT FLOW</em></li>
			                  <li><span id={ 'unix' } className="bar-expand unix"></span><em>UNIX</em></li>
			               </ul>
			               <h1>Languages:</h1>
			               <ul className="skills">
			                  <li><span id={ 'persian' } className="bar-expand php"></span><em>Persian</em></li>
			                  <li><span id={ 'english' } className="bar-expand html5"></span><em>English</em></li>
			               </ul>

			            </div>

			         </div>

			      </div>
		);
	}
}

export default Skills;