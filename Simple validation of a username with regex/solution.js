function validateUsr(username) {
    // build RegEx expression for matching lowercase, numbers, _ & length between 4,16
    res =  /^[a-z0-9_]{4,16}$/g;
    // return pass or false based on the match
    return res.test(username);
  }