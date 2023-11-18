export const useStore = defineStore('store', {
  state: () => ({
    users: [
      {
        id: 1,
        username: 'random',
        phone: '231456787',
        email: "something@test.com",
        createdDate: '12/12/2303',
      },
      {
        id: 2,
        username: 'user',
        phone: '231456787',
        email: "something@test.com",
        createdDate: '12/12/2303',
      },
      {
        id: 3,
        username: 'mukul',
        phone: '231456787',
        email: "something@test.com",
        createdDate: '12/12/2303',
      }
    ]
  }),

  getters: {
    getUsers: (state) => {
      return state.users
    }
  },

  actions: {

  }
})