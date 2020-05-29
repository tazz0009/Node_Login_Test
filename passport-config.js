const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => { // 로그인 인증 로직
        const user = getUserByEmail(email)
        console.log('user :', user);
        if (user == null) {
            console.log('No user with that email!!');
            return done(null, false, { message: 'No user with that email' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                console.log('Done!!');
                return done(null, user)
            } else {
                console.log('Password incorrect!!');
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser)) // Strategy 설정
    passport.serializeUser((user, done) => done(null, user)) // Strategy 성공 시 호출됨
    passport.deserializeUser((user, done) => {    // Strategy 성공 시 호출됨
        return done(null, user)
    })
}

module.exports = initialize