import { GET_HOME_LIST } from "./constants";

// 初始化数据

const initHomeData = {};

export default function homeList(preState = initHomeData, action) {
  switch (action.type) {
    case GET_HOME_LIST:
      return action.data;
    default:
      return preState;
  }
}
