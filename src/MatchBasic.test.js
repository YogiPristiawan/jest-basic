const MathBasic = require('./MathBasic')

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add')
    expect(MathBasic).toHaveProperty('subtract')
    expect(MathBasic).toHaveProperty('multiply')
    expect(MathBasic).toHaveProperty('divide')
    expect(MathBasic.add).toBeInstanceOf(Function)
    expect(MathBasic.subtract).toBeInstanceOf(Function)
    expect(MathBasic.multiply).toBeInstanceOf(Function)
    expect(MathBasic.divide).toBeInstanceOf(Function)
  })

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError()
      expect(() => MathBasic.add(1)).toThrowError()
      expect(() => MathBasic.add(1, 2, 3)).toThrowError()
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError()
    })

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add(1, '2')).toThrowError()
      expect(() => MathBasic.add(true, {})).toThrowError()
      expect(() => MathBasic.add([], undefined)).toThrowError()
    })

    it('should return a + b when given two parameters', () => {
      expect(MathBasic.add(1, 2)).toEqual(3)
      expect(MathBasic.add(5, 5)).toEqual(10)
      expect(MathBasic.add(5, 6)).toEqual(11)
    })
  })

  describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError()
      expect(() => MathBasic.subtract(1)).toThrowError()
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError()
      expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError()
    })

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.subtract(1, '2')).toThrowError()
      expect(() => MathBasic.subtract(true, undefined)).toThrowError()
      expect(() => MathBasic.subtract([], {})).toThrowError()
    })

    it('should return a - b when given parameters', () => {
      expect(MathBasic.subtract(2, 1)).toEqual(1)
      expect(MathBasic.subtract(5, 2)).toEqual(3)
      expect(MathBasic.subtract(9, 2)).toEqual(7)
    })
  })

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError()
      expect(() => MathBasic.multiply(1)).toThrowError()
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError()
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError()
    })

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.multiply(1, '2')).toThrowError()
      expect(() => MathBasic.multiply(true, undefined)).toThrowError()
      expect(() => MathBasic.multiply([], {})).toThrowError()
    })

    it('should return a * b when given parameters', () => {
      expect(MathBasic.multiply(2, 1)).toEqual(2)
      expect(MathBasic.multiply(5, 2)).toEqual(10)
      expect(MathBasic.multiply(9, 2)).toEqual(18)
    })
  })

  describe('A divide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrowError()
      expect(() => MathBasic.divide(1)).toThrowError()
      expect(() => MathBasic.divide(1, 2, 3)).toThrowError()
      expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError()
    })

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.divide(1, '2')).toThrowError()
      expect(() => MathBasic.divide(true, undefined)).toThrowError()
      expect(() => MathBasic.divide([], {})).toThrowError()
    })

    it('should return a / b when given parameters', () => {
      expect(MathBasic.divide(2, 1)).toEqual(2)
      expect(MathBasic.divide(6, 2)).toEqual(3)
      expect(MathBasic.divide(10, 2)).toEqual(5)
    })
  })
})
