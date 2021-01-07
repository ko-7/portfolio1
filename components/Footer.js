import { CenterFocusStrong } from '@material-ui/icons';
import React, { Component } from 'react';

export default class Footer extends Component{

  render(){
    return(<footer style={{backgroundColor:"black",color:"white",height:'20px'}}>
      <div>{this.props.footer}</div>
    </footer>);
  }
}