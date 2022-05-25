export default {
  "login": [
      {
        label: "用户名",
        query: "username",
        type: "text",
        placeholder: "用户名: 6-8位 字母数字"
      },
      {
        label: "密码",
        query: "password",
        type: "password",
        placeholder: "密码: 8-12位 最少包含一位(数字/大小写字母)"
      }
  ],
  "register": [
      {
        label: "用户名",
        query: "username",
        type: "text",
        placeholder: "用户名: 6-8位 字母数字"
      },
      {
        label: "邮箱",
        query: "email",
        type: "text",
        placeholder: "邮箱账号"
      },      
      {
        label: "密码",
        query: "password",
        type: "password",
        placeholder: "密码: 8-12位 最少包含一位(数字/大小写字母)"
      }
    ],
  "column": [
      {
        label: "分类名",
        query: "name",
        type: "text",
        placeholder: "分类名称"
      }
    ],
  "userInfo": [
      {
        label: "用户名",
        query: "username",
        type: "text",
        readonly: true,
        value: "用户名"
      },
      {
        label: "昵称",
        query: "nickname",
        type: "text",
        value: "昵称"
      },
      {
        label: "邮箱",
        query: "email",
        type: "text",
        value: "邮箱"
      },
      {
        label: "签名",
        query: "signature",
        type: "text",
        value: "个性签名"
      }
    ]
}