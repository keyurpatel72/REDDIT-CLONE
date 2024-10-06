const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).json({message:'NO token , authorization denied' })
        try {
            const decode = jwt.verify(token,process.env.JWT_SEVRET_KEY);
            req.user = decode;
            next()
        } catch (error) {
            res.status(401).json({message:'token is not valid'});
        }
}