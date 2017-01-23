// Require model
var Studios = require('../models/studios');

// Export our route handlers
module.exports = {
  
  get : (req, res) => {
    Studios.find({}, (err, studios)=>{
      if(err) {
        console.log("Studios-GET".red);
        return res.send(err)
      }
      
      res.send(studios);
      
    })
  },
  
}
