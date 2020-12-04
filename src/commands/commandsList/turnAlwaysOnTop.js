module.exports = ( window ) => {
    let isTop = window.isAlwaysOnTop()
    if(isTop) window.setAlwaysOnTop(false)
    else window.setAlwaysOnTop(true)
    return;
}