import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import style from '../styles/globals'

export default class Layout extends Component{

  render(){
    return (<div>
      <Head>
        <title>{this.props.title}</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        {/* デザインツール関係 */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      </Head>

      {/* {style} */}

      <Header header={this.props.header} title={this.props.title} />
        {this.props.children}
      <Footer footer="copyright shimura" />
    </div>)
  }
}