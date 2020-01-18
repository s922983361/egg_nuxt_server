
const Controller = require('../../core/base_controller')

class TestController extends Controller {

    async index() {
        const { ctx, app, service, config, logger } = this;
        ctx.body = 'hi, egg get';
    }
    
    async show() {
        const { ctx, app, service, config, logger } = this;
        ctx.body = 'hi, egg get/:id';
    }

    async ['new']() {
        const { ctx, app, service, config, logger } = this;
        ctx.body = 'hi, egg get/:id';
    }

    async create() {
        const { ctx, app, service, config, logger } = this;
        ctx.body = 'hi, egg post';
    }

    async update() {
        const { ctx, app, service, config, logger } = this;
        ctx.body = 'hi, egg put';
    }

    async destroy() {
        const { ctx, app, service, config, logger } = this;
        ctx.body = 'hi, egg DELETE';
    }
    
}

module.exports = TestController;
