type Gender = undefined | null | '男' | '女' | '保密'

interface UserVO {
  /**
   * id
   */
  id?: string
  /**
   * 头像icon
   */
  avatar?: string
  /**
   * 生日
   */
  birthday?: string
  /**
   * 账号创建时间
   */
  createTime?: string
  /**
   * 邮箱
   */
  email?: string
  /**
   * 性别 （男|女|保密）
   */
  gender?: Gender
  /**
   * 邮箱是否验证（绑定）
   */
  isEmailVerified?: number
  /**
   * 手机号是否验证（绑定）
   */
  isPhoneVerified?: number
  /**
   * 最后登录时间
   */
  lastLoginTime?: string
  /**
   * 昵称
   */
  nickname?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 登录状态
   */
  status?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 用户名
   */
  username?: string
}

export const userListData:UserVO[] = [
  {
    id: '1',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    updateTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    status: 1,
    nickname: 'admin',
  },
  {
    id: '2',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    updateTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    status: 1,
  },
  {
    id: '3',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    updateTime: '2021-08-01 00:00:00',
    status: 0,
    },
  {
    id: '3',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    updateTime: '2021-08-01 00:00:00',
    status: 0,
  },{
    id: '3',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    updateTime: '2021-08-01 00:00:00',
    status: 0,
  },{
    id: '3',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    updateTime: '2021-08-01 00:00:00',
    status: 0,
  },{
    id: '3',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    updateTime: '2021-08-01 00:00:00',
    status: 0,
  },{
    id: '3',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    updateTime: '2021-08-01 00:00:00',
    status: 0,
  },{
    id: '3',
    avatar: 'https://p.qqan.com/up/2021-1/16097287631656400.jpg',
    birthday: '2021-08-01 00:00:00',
    createTime: '2021-08-01 00:00:00',
    username: 'admin',
    gender: '男',
    updateTime: '2021-08-01 00:00:00',
    status: 0,
  },
]