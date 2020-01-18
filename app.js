/**passport extend Jwt Strategy*/
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const opts = {}

module.exports = app => {
    /**passport extend Jwt Strategy*/
    app.on('request', (ctx) => {
        opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
        opts.secretOrKey = app.config.jwt.secret
        app.passport.use(new JwtStrategy(opts, async (jwt_payLoad, done) => {
            
            const user = await ctx.model.Manager.findById(jwt_payLoad.id)        
            if(user) {                 
                return done(null, user)// 返回ctx.state.user            
            } else {
                console.log('user not exsist.........')
                return done(null, false); 
            }
        }))
    })
    //listen error & log the message
    app.on('error',(err, ctx) => {
        const status = err.status || 500;
        app.logger.error({
            status,
            ip : ctx.request.ip,
            user : ctx.state.user,
            message: err.message
        })
    })

    // /**passport extend Jwt Strategy*/
    // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    // opts.secretOrKey = app.config.jwt.secret
    // app.passport.use(new JwtStrategy(opts, async (jwt_payLoad, done) => {
    //     console.log(app.mongoose)
    //     // const user = await app.mongoose.models.Manager.findById(jwt_payLoad.id)        
    //     // if(user) {                      
    //     //     return done(null, user)// 返回ctx.state.user            
    //     // } else {
    //     //     console.log('user not exsist')
    //     //     return done(null, false); 
    //     // }
    // }))
}