import React, { Component } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SB extends React.Component {
  render() {
    return (<div>
      <SearchBar maxLength={8} value={'你好!'}/>
    </div>
    );
  }
}

export default SB;