import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import { connect } from "react-redux";

import { getHomeList } from "./redux";
import Recommend from "./Recommend/Recommend";
import "./index.css";

@connect(
  (state) => ({
    homeList: state.homeList,
  }),
  { getHomeList }
)
class Home extends Component {
  componentDidMount() {
    this.props.getHomeList();
  }

  toSearch() {}

  toLogin() {}

  tabsContent = (tab) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        backgroundColor: "#fff",
      }}
    >
      <Recommend />
    </div>
  );

  render() {
    const tabs = [
      { title: "1st Tab" },
      { title: "2nd Tab" },
      { title: "3rd Tab" },
      { title: "4th Tab" },
      { title: "5th Tab" },
      { title: "6th Tab" },
      { title: "7th Tab" },
      { title: "8th Tab" },
      { title: "9th Tab" },
    ];

    return (
      <div>
        {/* 顶部 */}
        <div className="headerContainer">
          {/* 头部区域 */}
          <div className="header">
            <h1>
              <img src={require("@assets/images/logo.png")} alt="" />
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
          <Tabs
            tabs={tabs}
            renderTabBar={(props) => <Tabs.DefaultTabBar {...props} />}
          >
            {this.tabsContent}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Home;
