
//最新主题
const lastList = 'https://www.v2ex.com/api/topics/latest.json'
//最热主题
const hotList = 'https://www.v2ex.com/api/topics/hot.json'
/**
|--------------------------------------------------
| 根据提供信息取主题
  username	根据用户名取该用户所发表主题
  node_id	根据节点id取该节点下所有主题
  node_name	根据节点名取该节点下所有主题
|--------------------------------------------------
*/
const getinfo = 'https://www.v2ex.com/api/topics/show.json'

//取主题回复 topic_id	主题id（必选）  page   page_size

const replies = 'https://www.v2ex.com/api/replies/show.json'

//获取用户信息  username	用户名（必选）

const getPerson = 'https://www.v2ex.com/api/members/show.json'

const api = {
  lastList,
  hotList,
  getinfo,
  replies,
  getPerson
}

export const api;

export function getFetch = ()
