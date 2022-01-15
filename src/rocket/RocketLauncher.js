class RocketLauncher {
  constructor(rockets = []) {
    this.rockets = rockets
  }

  launchAllRockets() {
    this.rockets.forEach((v) => {
      v.engine = 'active'
    })

    this.rockets = []
  }

  launchByQueue(){
    const rocket = this.rockets.shift()
    rocket.engine   ='active'    
  }
}

module.exports = RocketLauncher
