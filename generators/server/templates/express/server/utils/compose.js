/**
 * 组合多个 Promise 的 model
 *
 * @param {any} promises
 * {
 *      me: user.userUidGet(req, uid, ...)
 *      group: group.groupGroupIdGet(req, uid, ...)
 * }
 * @param {any} next  express 中的 next
 * @returns
 */
function compose(promises, next) {

        async function _compose(keys) {
            const pageData = {}

            for (let key of keys ) {
                const p = promises[key]

                if (typeof key !== 'string') {
                    console.error('promises key must is a string')
                    return
                }
                if (typeof p !== 'function') {
                    console.error('promises value must is a function that return a Promise')
                    return
                }

                try {
                    const response = await p()

                    pageData[key] = response.data
                } catch (error) {
                    console.error(error)
                    return next({
                        status: error.state,
                        error: error.response ? error.response.error : error
                    })
                }
            }

            return pageData
        }

        const entry = Object.keys(promises)

        return _compose(entry)
    }

    module.exports = compose
