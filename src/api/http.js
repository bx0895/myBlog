import service from './common'
import vuex from '@/store'
import store from 'store'
import API_LIST from '@/config/api.config'
import base from '@/config/base.config'
import encrypt from '@/util/encrypt'

const { TOKEN_NAME } = base

export default async function Http ({ type, data }) {
  if (!(type in API_LIST)) {
    throw new Error('API请求错误')
  }

  let { url, method, rest = false, setToken = false, rsaKey = false, noMessage = false } = API_LIST[type]
  try {
    //rest为true,根据id查找文章处理
    if (rest) {
      //将url的:id替换为传进来的id
      let restSymbol = url.match(/:(.*)$/)[1]
      url = url.replace(/:(.*)$/, data[restSymbol])
    }

    if (data) {
      //如果存在需要加密的 data 键
      if (rsaKey && data[rsaKey]) {
        //加密处理
        data[rsaKey] = await encrypt(data[rsaKey])
      }
    }
    if (method === 'get' || method === 'delete') {
      data = { params: data }
    }
    
    let result = await service[method](url, data)
    if (setToken) {
      //本地存储用户登录或者注册的token和uid
      let token = result.token
      let uid = result.userId
      store.set('uid', uid)
      store.set(TOKEN_NAME,token)
      vuex.dispatch('login')
      this.$notify({
        title: '成功',
        message: '登录成功',
        type: 'success'
      });
    }
    return result

  } catch (error) {
    if (error.response) {
      let message = error.response.data.message
      if (!noMessage) {
        this.$notify.error({
          title: '失败',
          message: message,
        });

      }
    }
    return Promise.reject(error);
  }
}
