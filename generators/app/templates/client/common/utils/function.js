export function getUniqueKey() {
    const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

export function getMountNode() {
    return document.querySelector('#app')
}

export function getPagedata() {
    let ele = document.querySelector('[name=pageData]')
    let json = ele.getAttribute('content')
    let data = {}
    try {
        data = JSON.parse(json)
    } catch (e) {
        console.error(e)
    } finally {
        return data
    }
}


export function scrollToBottom() {
    const dh = document.body.clientHeight
    window.scrollTo(0, dh)
}

export function attachFastClick(FastClick) {
    FastClick && FastClick.attach(document.body)
}
