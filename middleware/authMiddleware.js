//middleware to find the product using id
async function authAdmin (req,res,next){
    if (req.user && req.user.isAdmin) {
        next()
      } else {
        res.status(401)
        throw new Error('Not authorized as an admin')
      }
}

module.exports = {authAdmin};