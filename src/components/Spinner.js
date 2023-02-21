import React, { Component } from 'react'
import Gears from './Gears.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'><img src={Gears} alt="loading" /></div>
    )
  }
}

export default Spinner