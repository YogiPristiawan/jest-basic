class RocketRepairKit{
	constructor(a, b, c){
		this.a = a
		this.b = b
		this.c = c
	}

	repair(rocket) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(`Berhasil memperbaiki roket: ${rocket}`)
			}, 1000)
		})
	}
}

module.exports = RocketRepairKit