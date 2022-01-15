const Rocket = require('./Rocket')
const RocketLauncher = require('./RocketLauncher')

describe('A Rocket launcher', () => {
	it('Should launch all rockets',() => {
		const nasaRocket = new Rocket('nasa')
		const waterRocket = new Rocket('water')
		const flameRocket = new Rocket('flame')

		/**
		 * launch rocket
		 */
		const rocketLauncher = new RocketLauncher([
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

	it('Should launc rockets by queue', () => {
		const nasaRocket = new Rocket('nasa')
		const waterRocket = new Rocket('water')
		const flameRocket = new Rocket('flame')

		/**
		 * launch rocket by queue
		 */
		const rocketLauncher = new RocketLauncher([
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
})