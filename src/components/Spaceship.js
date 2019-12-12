import React from 'react';

class Spaceship extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
      
      </div>
      
      )
  }
}