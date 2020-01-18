/**
 * @desc role pamars rule 
 * //https://www.npmjs.com/package/parameter
 */

module.exports = {
    createRule: {
        title:      { type: 'string' },
        status:     { type: 'string' },
        description:{ type: 'string?' },
    },

    updateRule: {
        title:      { type: 'string' },
        status:     { type: 'string' },
        description:{ type: 'string?' },
    }
}