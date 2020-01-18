'use strict';

/** @type Egg.EggPlugin */
module.exports = {
	// had enabled by egg
	// static: {
	//   enable: true,
	// }
	mongoose: {
        enable: true,
        package: 'egg-mongoose'
	},
	cors: {
		enable: true,
        package: 'egg-cors'
	},
	validate: {
		enable: true,
		package: 'egg-validate'
	},
	passport: {
		enable: true,
		package: 'egg-passport'
	},
	jwt: {
		enable: true,
		package: "egg-jwt"
	},
	bcrypt: {
		enable: true,
		package: 'egg-bcrypt'
	}
};
