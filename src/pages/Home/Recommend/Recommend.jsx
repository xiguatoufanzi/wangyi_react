import React, { Component } from "react";
import { connect } from "react-redux";

import { Carousel, Icon } from "antd-mobile";
import "./index.css";

@connect((state) => ({
  homeList: state.homeList,
}))
class Recommend extends Component {
  state = {
    bannerList: [
      {
        id: 0,
        imgUrl:
          "https://yanxuan.nosdn.127.net/da67541e53669b388b8c664797549096.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      },
      {
        id: 1,
        imgUrl:
          "https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      },
      {
        id: 2,
        imgUrl:
          "https://yanxuan.nosdn.127.net/aeb01490aee3a747325725ddc06150d6.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      },
      {
        id: 3,
        imgUrl:
          "https://yanxuan.nosdn.127.net/668b5187e5a7c283ca8bb5695d3e87f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      },
    ],
    imgHeight: 176,
  };

  // brand数据
  policyDescList = () => {
    const { policyDescList } = this.props.homeList;
    if (policyDescList) {
      return policyDescList;
    }
  };

  render() {
    let { kingKongList } = this.props.homeList.kingKongModule;
    let { categoryList } = this.props.homeList.categoryHotSellModule;
    let { itemList } = this.props.homeList.flashSaleModule;

    return (
      <div>
        {/* 轮播 */}
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={(index) => console.log("slide to", index)}
        >
          {this.state.bannerList.map((val) => (
            <img
              key={val.id}
              src={val.imgUrl}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
          ))}
        </Carousel>

        {/* brand */}
        <div className="brand">
          <div className="policyDescList">
            {this.policyDescList().map((item, index) => {
              return (
                <div className="policyDescItem" key={index}>
                  <img src={item.icon} alt="" />
                  <span>{item.desc}</span>
                </div>
              );
            })}
          </div>

          {/* 是个图标区域 */}
          <div className="kingKongList">
            {kingKongList.map((item, index) => {
              return (
                <div className="kingKongItem" key={index}>
                  <img src={item.picUrl} alt="" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 新用户 */}
        <div className="newUser">
          <div className="firstBuy"></div>
          <div className="newItem">
            <img
              src="https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0"
              alt=""
            />
            <img
              src="https://yanxuan.nosdn.127.net/01fae6d1209f9904af34095feb394325.png?quality=75&type=webp&imageView&thumbnail=375x0"
              alt=""
            />
          </div>
        </div>

        {/* 新人专享 */}
        <div className="newUserEnjoy">
          <div className="text">
            <span>新人专享礼</span>
          </div>
          <div className="newLeft">
            <div className="name">新人专享礼包</div>
            <img
              src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
              alt=""
            />
          </div>
          <div className="newRight">
            <div className="top">
              <div className="title">福利社</div>
              <div className="subTitle">今日特价</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/4193be1039593e97798de896c304fb9d.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
              />
              <div className="discount">
                <div className="line1">¥10</div>
                <div className="line2">¥15</div>
              </div>
            </div>
            <div className="bottom">
              <div className="title">新人拼团</div>
              <div className="subTitle">1元起包邮</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/2738944ac699357481e5c1a94b56bdea.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
              />
              <div className="discount">
                <div className="line1">¥4.9</div>
                <div className="line2">¥10.0</div>
              </div>
            </div>
          </div>
        </div>

        {/* 热销榜 */}
        <div className="hot">
          <div className="title">类目热销榜</div>
          <div className="hotList">
            {categoryList.map((hotItem, index) => {
              return (
                <div className="hotItem" key={index}>
                  <div className="hotName">{hotItem.categoryName}</div>
                  <img src={hotItem.picUrl} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        {/* 限时购 */}
        <div className="flashSale">
          <div className="flashSaleHeader">
            <div className="title">限时购</div>
            {/* 倒计时补充 */}
            <div className="more">
              <span>更多</span>
              <Icon type="right" className="arrow" size="lg" />
            </div>
          </div>
          <div className="flashList">
            {itemList.map((flashItem) => {
              return (
                <div className="flashItem" key={flashItem.itemId}>
                  <img src={flashItem.picUrl} alt="" />
                  <span className="actualPrice">
                    ￥{flashItem.activityPrice}
                  </span>
                  <span className="retailPrice">￥{flashItem.originPrice}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 员工精选 */}
        <div className="workerBuy">
          <div className="left">
            <div className="title">严选超市</div>
            <div className="desc">10元凑好物</div>
            <div className="picList">
              <img
                src="https://yanxuan-item.nosdn.127.net/cfd0fec5e70ca09d4c0b7492dba26f2e.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150"
                className="pic"
                alt=""
              />
              <img
                src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150"
                className="pic"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <div className="title">员工精选</div>
            <div className="desc">自动伞75折</div>
            <div className="picList">
              <img
                src="https://yanxuan-item.nosdn.127.net/f3f18a4fe9e7905cd7c9ff28e42ff0c2.png?quality=75&type=webp&imageView&thumbnail=150x150"
                className="pic"
                alt=""
              />
              <img
                src="https://yanxuan-item.nosdn.127.net/fe544cee59cc95a9159a722b6be01faa.png?quality=75&type=webp&imageView&thumbnail=150x150"
                className="pic"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="ftWrap">
          <div className="bd">
            <a
              href="/downloadapp?_stat_from=search_pz_baidu_29&amp;appAwakeUrl=http%3a%2f%2fm.you.163.com"
              className="goApp"
            >
              下载APP
            </a>
            <a
              href="https://you.163.com?_m_forcepc_=true&amp;_m_anonid_=ff1b6ade-2a7c-4539-a6e2-af40e1d43dbb"
              className="goWeb"
            >
              电脑版
            </a>
          </div>
          <p className="copyright">
            网易公司版权所有 © 1997-2020
            <br />
            食品经营许可证：JY13301080111719
          </p>
        </div>
      </div>
    );
  }
}

export default Recommend;
