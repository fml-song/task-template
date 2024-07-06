import { get, post } from './index.js'

const baseParams = { aid: 2608, uuid: "7143033832170014212", spider: 0 }

// 签到 post growth_api/v1/check_in
export const checkIn = () => post('growth_api/v1/check_in')

// 抽奖 post growth_api/v1/lottery/draw
export const lotteryDraw = () => post('growth_api/v1/lottery/draw')

// 获取掘友列表 get user_api/v1/author/recommend
export const getFollowees = () => get('user_api/v1/author/recommend', { ...baseParams, cursor: 0, limit: 20 })

// 关注掘友 post interact_api/v1/follow/do
export const follow = (id) => post('interact_api/v1/follow/do', { id, type: 1 }, baseParams)

// 取消关注 post interact_api/v1/follow/undo?aid=2608&uuid=7374693535167628819&spider=0
export const cancelFollow = (id) => post('interact_api/v1/follow/undo', { id, type: 1 }, baseParams)

// 获取文章列表 post recommend_api/v1/article/recommend_all_feed
export const getArticles = () => post('recommend_api/v1/article/recommend_all_feed', {}, baseParams)

// 点赞文章 post interact_api/v1/digg/save
export const likeArticle = (id) => post('interact_api/v1/digg/save', { item_id: id, item_type: 2, client_type: 2608 }, baseParams)

// 取消点赞文章 post interact_api/v1/digg/cancel
export const cancelLikeArticle = (id) => post('interact_api/v1/digg/cancel', { item_id: id, item_type: 2, client_type: 2608 }, baseParams)

// 收藏文章 post interact_api/v2/collectionset/add_article
export const collectArticle = (id) => post('interact_api/v2/collectionset/add_article',
    {
        article_id: id,
        select_collection_ids: ["7174290282463100958"],
        unselect_collection_ids: ["7174289206494101517"],
        is_collect_fast: false
    },
    baseParams
)

// 取消收藏文章 post interact_api/v2/collectionset/delete_article
export const cancelCollectArticle = (id) => post('interact_api/v2/collectionset/delete_article', { article_id: id }, baseParams)

// 获取沸点列表 post recommend_api/v1/short_msg/recommend
export const getShortMsgs = () => post('recommend_api/v1/short_msg/recommend', { id_type: 2, sort_type: 300, cursor: "0", limit: 20 }, baseParams)

// 点赞沸点 post interact_api/v1/digg/save
export const likeShortMsg = (id) => post('interact_api/v1/digg/save', { item_id: id, item_type: 4, client_type: 2608 }, baseParams)

// 取消点赞沸点 post interact_api/v1/digg/cancel
export const cancelLikeShortMsg = (id) => post('interact_api/v1/digg/cancel', { item_id: id, item_type: 4, client_type: 2608 }, baseParams)

// 获取任务完成情况 post growth_api/v1/user_growth/task_list
export const getTaskStatus = () => post('growth_api/v1/user_growth/task_list', { growth_type: 1 }, baseParams)