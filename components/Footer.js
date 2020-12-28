import React, { Component } from 'react';

export default class Footer extends Component{

  render(){
    return(<footer>
      <div>{this.props.footer}</div>
    </footer>);
  }
}