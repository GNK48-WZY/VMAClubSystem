export default {
  namespaced: true,
  state: () => ({
    list: [
      {
        id: 0,
        name: '社团名',
        description: '社团介绍',
        imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
        requirement: '社团要求',
        location: 'Room 422',
      },
      {
        id: 1,
        name: '社团名1',
        description: '社团介绍1',
        imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
        requirement: '社团要求',
        location: 'Room 422',
      },
      {
        id: 2,
        name: '社团名2',
        description: '社团介绍2',
        imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
        requirement: '社团要求',
        location: 'Room 422',
      },
      {
        id: 3,
        name: '社团名3',
        description: '社团介绍3',
        imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
        requirement: '社团要求',
        location: 'Room 422',
      },
      {
        id: 4,
        name: '社团名4',
        description: '社团介绍4',
        imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
        requirement: '社团要求',
        location: 'Room 422',
      },
      {
        id: 5,
        name: '社团名5',
        description: '社团介绍5',
        imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
        requirement: '社团要求',
        location: 'Room 422',
      },
    ],
  }),
  getters: {
    list: (state) => state.list,
  },
};
