import Velocity from 'velocity-animate'
window.Velocity = Velocity
import 'velocity-animate/velocity.ui'

import install from './install'
import start from './start'
import init from './init'
import * as theme from './theme'

let hamster = {
    varsion: '0.1.0',
    install,
    start,
    theme
}

init(hamster)

export default hamster
