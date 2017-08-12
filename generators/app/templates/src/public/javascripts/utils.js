export getMountNode() {
    return document.querySelector('#content')
}

export getPagedata() {
    let ele = document.querySelector('[name=pageData]')
    let json = ele.getAttribute('content')
    let data = {}

    try {
        data = JSON.parse(json)
    } catch (error) {
        console.error(error)
    } finally {
        return data
    }
}
