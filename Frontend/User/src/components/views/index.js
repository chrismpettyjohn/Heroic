const index = {
  Parent: require('./parent').default,
  Errors: {
    NotFound: require('./errors/not-found').default,
    System: require('./errors/system').default
  },
  Guest: {
    Login: require('./guest/login').default
  },
  User: {
    Index: require('./user/index').default,
    Logout: require('./user/logout').default,
    Home: {
      Me: require('./user/home/me').default,
      Profile: {
        Index: require('./user/home/profile/index').default,
        Home: require('./user/home/profile/home').default,
        Guestbook: {
          Add: require('./user/home/profile/guestbook/add').default,
          View: require('./user/home/profile/guestbook/view').default
        }
      },
      Client: require('./user/home/client').default
    },
    Community: {
      Photos: require('./user/community/photos').default,
      Rooms: {
        List: require('./user/community/rooms/list').default,
        Item: require('./user/community/rooms/item').default
      },
      Groups: {
        List: require('./user/community/groups/list').default,
        Item: require('./user/community/groups/item').default
      },
      News: {
        Category: require('./user/community/news/category').default,
        Article: require('./user/community/news/article').default
      },
      Staff: require('./user/community/staff').default
    },
    Forum: {
      Index: require('./user/forum/index').default,
      Dashboard: require('./user/forum/dashboard').default,
      Section: {
        View: require('./user/forum/section/view').default,
        Create: require('./user/forum/section/create').default
      },
      Post: {
        View: require('./user/forum/post/view').default,
        Create: require('./user/forum/post/create').default
      }
    }
  }
}

export default index
