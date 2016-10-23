export default {
    css: false,
    enter(el, done) {
        Velocity(el, 'stop')
        Velocity(el, 'slideDown', done)
    },
    enterCancelled(el) {
        Velocity(el, 'stop')
        el.removeAttribute('style')
    },
    leave(el, done) {
        Velocity(el, 'stop')
        Velocity(el, 'slidUp', done)
    },
    leaveCancelled(el) {
        Velocity(el, 'stop')
        el.removeAttribute('style')
    }
}
