const Rocket = require('./Rocket')
const RocketLauncher = require('./RocketLauncher')
const RocketRepairKit = require('./RocketRepairKit')

describe('A Rocket launcher', () => {
	it('Should launch all rockets',() => {
		const nasaRocket = new Rocket('nasa')
		const waterRocket = new Rocket('water')
		const flameRocket = new Rocket('flame')

		/**
		 * launch all rockets
		 */

		// using DUMMY test double ("insert dummy object")
		const rocketLauncher = new RocketLauncher({}, [
			nasaRocket,
			waterRocket,
			flameRocket
		])

		rocketLauncher.launchAllRockets()

		expect(nasaRocket.engine).toEqual('active')
		expect(waterRocket.engine).toEqual('active')
		expect(flameRocket.engine).toEqual('active')
		expect(rocketLauncher.rockets.length).toEqual(0)		
	})

	it('Should launch rockets by queue', () => {
		const nasaRocket = new Rocket('nasa')
		const waterRocket = new Rocket('water')
		const flameRocket = new Rocket('flame')

		/**
		 * launch rocket by queue
		 */

		// using DUMMY double ("insert dummy object")
		const rocketLauncher = new RocketLauncher({}, [
			nasaRocket,
			waterRocket,
			flameRocket
		])

		rocketLauncher.launchByQueue()

		expect(nasaRocket.engine).toEqual('active')
		expect(waterRocket.engine).toEqual('nonactive')
		expect(flameRocket.engine).toEqual('nonactive')
		expect(rocketLauncher.rockets.length).toEqual(2)
	})

	it('Should return a correct return when repair kit cannot repair the rocket', async () => {
		const nasaRocket = new Rocket('nasa')
		const waterRocket = new Rocket('water')
		const flameRocket = new Rocket('flame')

		/**
		 * repair all rockets
		 */

		// using STUB test double ("change object behavior using fake object")
		const fakeRepairKit = {
			repair: () => Promise.reject('Failed to repair the rocket')
		}
		const rocketLauncher = new RocketLauncher(fakeRepairKit, [
			nasaRocket,
			waterRocket,
			flameRocket
		])

		const result = await rocketLauncher.repairAllRockets()

		expect(result).toEqual('There was 1 of 3 rocket fail to repair!')
	})

	it('Should repair some repairable rocket when repair kit cannot repair some the rocket', async () => {
		//Arange
		const repairableRocket = new Rocket('repairableRocket')
		const unrepairableRocket = new Rocket('unrepairableRocket')

		/**
		 * repair all rockets
		 */

		// using MOCK test double
		const fakeRepairKit = {
			repair: jest.fn().mockImplementation((rocket) => {
				if(rocket.name === 'repairableRocket'){
					return Promise.resolve()
				}

				return Promise.reject('failed to repair the rocket')
			})			
		}

		const rocketLauncher = new RocketLauncher(fakeRepairKit, [
			repairableRocket,
			unrepairableRocket
		])

		// Action
		const result = await rocketLauncher.repairAllRockets()

		expect(result).toEqual('There was 1 of 2 rocket fail to repair!')

		expect(fakeRepairKit.repair).toBeCalled()
		expect(fakeRepairKit.repair).toBeCalledWith(repairableRocket)
	})

	it('Should repair all the rockets with repair kit correctly', async () => {
		// Arange
		const nasaRocket = new Rocket('nasa')
		const waterRocket = new Rocket('water')
		
		// using SPY test duble
		const repairKit = new RocketRepairKit({}, {}, {})

		const spyRepair = jest.spyOn(repairKit, 'repair')
		const rocketLauncher = new RocketLauncher(repairKit, [
			nasaRocket,
			waterRocket
		])

		// Action
		const result = await rocketLauncher.repairAllRockets()

		// Assert
		expect(spyRepair).toBeCalledTimes(2)
		expect(spyRepair).toBeCalledWith(nasaRocket)
		expect(spyRepair).toBeCalledWith(waterRocket)
		expect(result).toEqual('all rocket repaired!')
	})
})