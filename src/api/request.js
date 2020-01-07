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
export const getHotSingerListRequest = ({page}) => {
    return axiosInstance.get(`/top/artists?offset=${page}`);
}
/* 请求歌手列表  */
export const getSingerListRequest= ({category, initials, page}) => {
    return axiosInstance.get(`/artist/list?cat=${category}&initial=${initials.toLowerCase()}&offset=${page}`);
}
