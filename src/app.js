const createServer = require('./api/CreateServer')
const FigureCalculator = require('./geometry/FigureCalculator')
const MathBasic = require('./math/MathBasic')

const init = async () => {
  const figureCalculator = new FigureCalculator(MathBasic)
  const server = createServer({ mathBasic: MathBasic, figureCalculator })

  await server.start()
  console.log(`Serve running on at ${server.info.uri}`)
}

init()
