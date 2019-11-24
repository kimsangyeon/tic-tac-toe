import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className='squre'>
        {this.props.value}
      </button>
    );
  }
}

export default Square;