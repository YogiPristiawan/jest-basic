class RocketLauncher {
  constructor(repairKit, rockets = []) {
    this.rockets = rockets
    this.repairKit = repairKit
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

  async repairAllRockets(){
    let failedRepairCount = 0
    try{
      for(const rocket of this.rockets){
        await this.repairKit.repair(rocket)
      }
    }catch(err){
      failedRepairCount++
    }

    if(!failedRepairCount){
      return `all rocket repaired!`
    }
    
    return `There was ${failedRepairCount} of ${this.rockets.length} rocket fail to repair!`
  }
}

module.exports = RocketLauncher
