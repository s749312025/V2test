
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

export const api = {
  lastList,
  hotList,
  getinfo,
  replies,
  getPerson
}

const paramsQs = (url, params) => {
  if(params) {
    let paramsStr = '';
    for (var key in params) {
      paramsStr += '&' + key + '=' + params[key]
    }
    paramsStr = paramsStr.replace(/&/, '?') 
    return url + paramsStr
  } else {
    return url
  }
}

export const Request = async (url, params, s_key) => {
  let response = await fetch(paramsQs(url, params));
  let responseJson = await response.json();
  return responseJson;
}


/* const Request = (url, params, s_key) {
  return (dispatch) => {
    fetch(paramsQs(url, params))
      .then(res => res.json())
      .then(json)
  }
}
 */