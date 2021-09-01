const isLoggedIn = (state = true, action) => {
  switch(action.type) {
    case "LOGGEDIN":
      return !state
    default: 
      return state
  }
}

export default isLoggedIn;