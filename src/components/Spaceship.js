import React from 'react';

class Spaceship extends React.Component{
  render(){
    
    Spaceship.defaultProps = {
      speed: 'slow'
      hasRockets: false
      colors: ['black', 'red']
    }
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
         <p>{this.props.hasRockets}</p>
          <p>{this.props.colors}</p>
      
      </div>
      
      )
  }
}
export default Spaceship