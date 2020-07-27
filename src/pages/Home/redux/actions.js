/*
  同步action 返回值是action对象
  异步action 返回值是函数，函数接受dispatch作为参数，内部执行异步代码

  1. 当前redux管理什么状态数据？课程分类数据
  2. 对状态数据有哪些操作？
    读取（获取数据）
*/
// 引入请求api
import { getHomeData } from "@api/home/home";
// 引入常量
import { GET_HOME_LIST } from "./constants";

/*
  获取首页数据
*/
const getHomeDataSync = (homeData) => ({
  type: GET_HOME_LIST,
  data: homeData,
});

export const getHomeList = () => {
  return async (dispatch) => {
    const result = await getHomeData();
    dispatch(getHomeDataSync(result.data));
    // 执行异步代码~
    /* return getHomeData().then((response) => {
      dispatch(dispatch(getHomeDataSync(response.data)));
      return response.data;
    }); */
  };
};
