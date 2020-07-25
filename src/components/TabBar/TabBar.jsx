import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { Route, Switch, withRouter } from "react-router-dom";
import routes from "../../routes";
import "./TabBar.css";

@withRouter
class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <Switch>
          {routes.map((item) => {
            return (
              <Route
                path={item.path}
                component={item.component}
                key={item.path}
                exact
              ></Route>
            );
          })}
        </Switch>
      </div>
    );
  }

  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#DD1A21"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            key="Home"
            icon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/tab-home.png")}
                  alt=""
                />
                <div className="bartxt">首页</div>
              </div>
            }
            selectedIcon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/tab-home-current.png")}
                  alt=""
                />
                <div className="bartxt">首页</div>
              </div>
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab",
              });
              this.props.history.push("/");
            }}
            data-seed="logId"
          >
            {this.renderContent("Koubei")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/tab-cate.png")}
                  alt=""
                />
                <div className="bartxt">分类</div>
              </div>
            }
            selectedIcon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/tab-cate-current.png")}
                  alt=""
                />
                <div className="bartxt">分类</div>
              </div>
            }
            key="Cart"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab",
              });
              this.props.history.push("/category");
            }}
            data-seed="logId1"
          >
            {this.renderContent("Cart")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/buy.png")}
                  alt=""
                />
                <div className="bartxt">值得买</div>
              </div>
            }
            selectedIcon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/buy-current.png")}
                  alt=""
                />
                <div className="bartxt">值得买</div>
              </div>
            }
            key="goodbuy"
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab",
              });
              this.props.history.push("/goodbuy");
            }}
          >
            {this.renderContent("Friend")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/tab-cart.png")}
                  alt=""
                />
                <div className="bartxt">购物车</div>
              </div>
            }
            selectedIcon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/tab-cart-current.png")}
                  alt=""
                />
                <div className="bartxt">购物车</div>
              </div>
            }
            key="Cart"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab",
              });
              this.props.history.push("/cart");
            }}
          >
            {this.renderContent("My")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/tab-my.png")}
                  alt=""
                />
                <div className="bartxt">个人</div>
              </div>
            }
            selectedIcon={
              <div>
                <img
                  className="barImg"
                  src={require("../../assets/images/tabBar/tab-my-current.png")}
                  alt=""
                />
                <div className="bartxt">个人</div>
              </div>
            }
            key="Personal"
            selected={this.state.selectedTab === "pinkTab"}
            onPress={() => {
              this.setState({
                selectedTab: "pinkTab",
              });
              this.props.history.push("/personal");
            }}
          >
            {this.renderContent("Friend")}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample;
