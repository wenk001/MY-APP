import React, { Component } from 'react';
import { WhiteSpace } from 'antd-mobile';
import logo from './logo.svg';
import './App.css';
import Zmd from './ZMD';
import SB from './SSK';
import Dhl from './NAV';
import Sl from './Splb';

const BuJU = () => (
  <div>
    <WhiteSpace size="sm" />
    <div className='placeholder'><Zmd/></div>

    <WhiteSpace size="sm" />
    <div className='placeholder'><SB/></div>

    <WhiteSpace size="sm"/>
    <div className='placeholder'><Dhl/></div>

    <WhiteSpace size="lg" />
    <div className='placeholder'><Sl/></div>

    <WhiteSpace size="xl" />
    <div className='placeholder'><Sl/></div>

    <WhiteSpace size="xl" />
    <div className='placeholder'><Sl/></div>
  </div>
);
class App extends React.Component{
  render(){
    return(
      <BuJU/>
    );
  }
}

export default App;