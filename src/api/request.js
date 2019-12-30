import {axiosInstance} from './config'

/* 请求banner列表 */
export const getBanner = () => {
    return axiosInstance.get('/banner');
}
/* 请求推荐列表 */
export const getRecommendList = () => {
    return axiosInstance.get('/personalized');
}

/* 请求热门歌手列表*/
export const getHotSingerListRequest = (count) => {
    return axiosInstance.get(`/top/artists?offset=${count}`);
}
/* 请求歌手列表  */
export const getSingerListRequest= (category, alpha, count) => {
    return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}
