import React, { Component } from 'react';
import Header from 'component/layout/standard/header/header.jsx';
import logo from '../../asset/images/loading.gif';

export default class Hello extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }
  render() {
    return <div><Header></Header><div><img src={logo} /></div>{this.props.message.text}</div>;
  }
}