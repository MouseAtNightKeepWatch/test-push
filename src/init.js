export default (hamster) => {
    // auto install in standalone mode
    if (typeof window !== 'undefined' && window.Vue) {
        window.hamster = hamster
        window.Vue.use(hamster)
    }
}
