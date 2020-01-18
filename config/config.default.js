/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	//midlleware example
	//config.middleware = [ 'gzip' ],
	// 配置 gzip 中间件的配置
	// config.gzip =  {
	// 	threshold: 1024, // 小于 1k 的响应体不压缩
	//  match: '/static',
	// };

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1577333586904_7970';

	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	// mongodb client setting
	exports.mongoose = {
        client: {
            url: 'mongodb://127.0.0.1:27017/ezgo',
            options: {
				auth: { authSource: "admin" },
				user: 'jsd',
				pass: 'aaa29936225AAA',
				useNewUrlParser: true,
				useFindAndModify: false,
				useCreateIndex: true,
				useUnifiedTopology: true
			},
        }
	};
	exports.security = { 
		csrf: {
			ignore: ctx => {
				if(ctx.request.url.indexOf('/api') != -1 ){
					return true
				}
				return false
			}
		},
		domainWhiteList:['http://localhost:3000'], 
	};
	exports.cors = { 
		origin:'*', //all request if you open this or only http://localhost:3000
		credentials: true, // cors with cookie or not
		allowMethods:'GET,PUT,POST,DELETE' 
	};
	exports.validate = {
		//https://www.npmjs.com/package/parameter
		convert: true,
		validateRoot: false, //restrict the being validate value must be a object
	};
	exports.jwt  = {
		secret: "89Sb-TCpb!s#Zhp9c!?$nmN8"
	};
	exports.logger = {
		encoding: 'utf-8',
		outputJSON: true,
	};
	exports.bcrypt = {
		saltRounds: 10 // default 10
	};

	return {
		...config,
		...userConfig,
	};
};
