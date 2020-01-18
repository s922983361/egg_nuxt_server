/**
 * @desc manager pamars rule 
 * //https://www.npmjs.com/package/parameter
 */

module.exports = {
    createRule: {
        name:       { type: 'string' },
        email:      { type: 'string' },
        tel:        { type: 'string' },
        password:   { type: 'string' },
        role_id:    { type: 'string?' },
    },

    updateRule: {
        name:       { type: 'string' },
        email:      { type: 'string' },
        tel:        { type: 'string' },
        password:   { type: 'string' },
        role_id:    { type: 'string?' },
    },

    loginRule: {        
        email:      { type: 'string' },
        password:   { type: 'string' },
    }
}