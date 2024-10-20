const nucampState = {
    campsites: {
      campsitesArray: []
    },
    comments: {
      commentsArray: []
    },
    partners: {
      partnersArray: []
    },
    promotions: {
      promotionsArray: []
    }
  }
  
  
  
  // OPTION 1: WILL NOT DO THIS
  
  dispatch({
    type: "STAR_COMMENT",
    payload: 3
  })
  
  // OPTION 2: WILL DO THIS
  
  // action creator (WILL NOT WRITE)
  // should be called makeStarCommentAction
  function starComment(payload) { // payload = 3
    // returns an action object that describes which comment to star
    return {
      type: "STAR_COMMENT",
      payload: payload
    }
  }
  
  // const starCommentAction = starComment(3)
  // dispatch(starCommentAction)
  
  // ACTUAL CODE YOU WILL WRITE
  dispatch(starComment(3))
  
  // I want to dispatch the action returned by the starComment action creator with the payload of 3
  