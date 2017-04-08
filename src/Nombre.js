import React, {Component} from 'react';

class Nombre extends Component{
  render(){
    return(
      <h1> Hola mundo - {this.props.name} </h1>
    )
  }
}

export default Nombre;