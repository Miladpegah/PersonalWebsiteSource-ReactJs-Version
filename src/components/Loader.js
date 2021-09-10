import React from 'react';

class Loader extends React.Component {
	componentDidMount(){
		let num = 3;
		let text = -1;

		let timeout = document.getElementById('timer');
		let messageField =document.getElementById('message');
		
		
		let startWriter = setInterval(writer,100);
		let timer = setInterval(startTimer,1000);

		let message = 'Power By react js';
		
		function startTimer(){
			if (num == 0) {
				clearInterval(timer);
			}else{
				num--;
				timeout.innerHTML = num;
			}
		}


		function writer(){
			let messageArray = message.split('');
			if (text == messageArray.length - 1) {
				clearInterval(startWriter);
			}else{
				text++;
				messageField.innerHTML += messageArray[text]; 
			}

		}

	}

	render(){
		return(
			  <div className="ui active dimmer load-image">
			    <div className="ui massive text loader">
			    <h1 id={'message'}></h1>
			    <br/>
			    <br/>
			    <i id={'timer'}>3</i>
			    </div>
			  </div>

		);
	}
}

export default Loader;