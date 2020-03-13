import React, { Component } from "react";
import PropTypes from 'prop-types';

class MasterHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `${props.title}`
    };
  }

  // Life Cycle Methods
  componentDidMount() {} //Me ejecuto despues de pintar Sirve para llamar API

  componentDidUpdate(prevProps,prevState) {
    // if(prevProps.title !== this.props.title){
    //     console.log(prevProps.title)
    //     console.log(this.props.title);
    //     this.setState({
    //         title:`${this.props.title} - Desde MeasterHead`
    //     })
    // }


  } //Me ejecuto cuando cambia el estado o me pasan props
  componentWillUnmount() {} // Se ejcuta antes de quitar el componente del DOM

  componentDidCatch() {} // Se ejecuta cuando se detectan un error

  render() {
    return (
      <header className="masthead" style={{backgroundImage:`url(${this.props.banner})`}} >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{this.state.title}</h1>
                <span className="subheading">{this.props.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

MasterHead.propTypes = {
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired
}
// <MasterHead title="Mi titulo" />
 export default MasterHead;

