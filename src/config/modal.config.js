export default {
  "login": {
    title: '登录',
    formType: 'login',
    btns: [
      {
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        name: '登录',
        isSubmit: true
      }
    ]
  },
  "register": {
    title: '注册',
    formType: 'register',
    btns: [
      {
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        name: '注册',
        isSubmit: true
      }
    ]
  },
  "column": {
    title: '添加分类',
    formType: 'column',
    btns: [
      {
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        name: '提交',
        isSubmit: true
      }
    ]
  },
  "userInfo": {
    formType: 'userInfo',
    btns: [
      {
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        name: '提交',
        isSubmit: true
      }
    ]
  }
}