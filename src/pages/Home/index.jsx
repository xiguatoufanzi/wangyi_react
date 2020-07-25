import React, { Component } from "react";
import Tabs from "./Tabs/Tabs";
import "./index.css";

export default class Home extends Component {
  toSearch() {}

  toLogin() {}

  render() {
    return (
      <div>
        {/* 顶部 */}
        <div className="headerContainer">
          {/* 头部区域 */}
          <div className="header">
            <h1>
              <img src={require("../../assets/images/logo.png")} alt="" />
            </h1>
            <div className="searchContainer" onClick={this.toSearch}>
              <i></i>
              <span>搜索商品，共34085款好物</span>
            </div>
            <div className="btn" onClick={this.toLogin}>
              登录
            </div>
          </div>
        </div>
        {/* 头部导航 */}
        <div className="headerNav" ref="wrapper">
          <ul className="navList" v-if="homeData.kingKongModule">
            <li className="navItem active">推荐</li>
          </ul>
        </div>
        <Tabs></Tabs>
      </div>
    );
  }
}
