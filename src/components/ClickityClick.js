import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    this.setState(previousState => {
      return {
          hasBeenClicked: !previousState.hasBeenClicked
        }
    })
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 
