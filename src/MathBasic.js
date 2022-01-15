const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) { throw new Error('only 2 parameter allowed') }
    const [a, b] = args
    if (typeof a !== 'number' || typeof b !== 'number') { throw new Error('parameters should be number') }

    return a + b
  },
  subtract: (...args) => {
    if (args.length !== 2) { throw new Error('only 2 paramtere allowes') }
    const [a, b] = args
    if (typeof a !== 'number' || typeof b !== 'number') { throw new Error('parameters should be number') }

    return a - b
  },
  multiply: (...args) => {
    if (args.length !== 2) { throw new Error('only 2 paramtere allowes') }
    const [a, b] = args
    if (typeof a !== 'number' || typeof b !== 'number') { throw new Error('parameters should be number') }

    return a * b
  },
  divide: (...args) => {
    if (args.length !== 2) { throw new Error('only 2 paramtere allowes') }
    const [a, b] = args
    if (typeof a !== 'number' || typeof b !== 'number') { throw new Error('parameters should be number') }

    return a / b
  },
}

module.exports = MathBasic
