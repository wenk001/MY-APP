import React, { Component } from 'react';


class Ft extends React.Component{
    render(){
        return(
            <div className="foot">
                <div className="left-one">
                <a href="#">首页</a></div>
                <div className="left-two">
                <a href="#">全部商品</a></div>
                <div className="left-three">
                <a href="#">购物车</a></div>
                <div className="left-four">
                <a href="#">我的订单</a></div>
            </div>
        );
    }
}
export default Ft;