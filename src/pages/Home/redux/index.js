/*
  汇总当前redux的所有内容~让外面使用更加简单
*/
import homeList from "./reducer";

import { getHomeList } from "./actions";

export {
  homeList, // 状态数据
  getHomeList,
};
