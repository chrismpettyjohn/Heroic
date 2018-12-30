const Actions = ({

  // Set Page Route
  setRoute: (state, route) => ({
    route: {
      title: route.title,
      about: route.about
    }
  })
})

export default Actions