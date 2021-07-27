import React from 'react';
import Main from './main';
import Footer from './footer';
// import './footer.css';
// import './main.css'
class HOME extends React.Component {

  render() { 
    return (  
      <React.Fragment>
      <Main />
      <Footer />
      </React.Fragment>
    );
  }
}
 
export default HOME;