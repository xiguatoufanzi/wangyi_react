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

  // 根据导航显示具体页面
  tabsContent = (tab) => (
    <div
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Recommend />
    </div>
  );

  // 头部导航数据
  tabs = () => {
    let tabs = this.props.homeList.kingKongModule;
    if (tabs) {
      tabs = tabs.kingKongList.map((item) => ({ title: item.text }));
      return (tabs = [{ title: "推荐" }, ...tabs]);
    }
  };

  render() {
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
            tabs={this.tabs()}
            swipeable={false}
            renderTabBar={(props) => <Tabs.DefaultTabBar {...props} />}
          >
            {this.tabsContent}
          </Tabs>
        </div>

        {/* 固定定位 */}
        <a
          className="goGift"
          href="https://act.you.163.com/act/pub/qAU4P437asfF.html"
        ></a>
        <i className="goToTop"></i>
      </div>
    );
  }
}

export default Home;
