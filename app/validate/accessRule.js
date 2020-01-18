/**
 * @desc manager pamars rule 
 * //https://www.npmjs.com/package/parameter
 */

module.exports = {
    createRule: {
        module_name:    { type: 'string' },
        icon:           { type: 'string?' },
        action_name:    { type: 'string?' },
        type:           { type: 'number?' },
        url:            { type: 'string?' },
        sort:           { type: 'number?' },
        description:    { type: 'string?' },
        status:         { type: 'number?' },
    },

    updateRule: {
        module_name:    { type: 'string' },
        icon:           { type: 'string?' },
        action_name:    { type: 'string?' },
        type:           { type: 'number?' },
        url:            { type: 'string?' },
        sort:           { type: 'number?' },
        description:    { type: 'string?' },
        status:         { type: 'number?' },
    },
}