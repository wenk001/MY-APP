import { Grid } from 'antd-mobile';
import React, { Component } from 'react';

const data = Array.from(new Array(6)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));


class Sl extends React.Component{
    render(){
        return(
<div>
    <div className="sub-title">某类商品<div className="sub-title-right"><a href="#">更多</a></div></div>
    <Grid data={data} activeStyle={false} columnNum={2} itemStyle={{float:"left"}} hasLine={true}/>
        </div>
        );
    }
}



export default Sl;