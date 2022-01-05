import React from 'react';
import Header from './Header';
import Resume from './Resume';
import About from './About';
import Advice from './Advice';
import Contact from './Contact';
import Footer from './Footer';
import Loader from './Loader';

class App extends React.Component {
  
  render(){
      return(
        <>
          <Header/>

          <Resume/>   

          <About/>

          <Advice/>

          <Contact/>

          <Footer/>
        </>
      ); 
    }
  }
}
// class App extends React.Component {
//   state = {load : false};
//   componentDidMount(){
//     setTimeout(() => this.setState({load : true}),3000);
//   }
//   render(){
//     if (this.state.load == true) {
//       return(
//         <>
//           <Header/>

//           <Resume/>   

//           <About/>

//           <Advice/>

//           <Contact/>

//           <Footer/>
//         </>
//       ); 
//     }else{
//       return(
//         <Loader/>
//       );
//     }
//   }
// }

export default App;
