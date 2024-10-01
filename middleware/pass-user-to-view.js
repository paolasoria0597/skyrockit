// middleware/pass-user-to-view.js

const passUserToView = (req, res, next) => { // pass some user to view, in the locals object
    res.locals.user = req.session.user ? req.session.user : null 
    next()
  }
  
  module.exports = passUserToView
  