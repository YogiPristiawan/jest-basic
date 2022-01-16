const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('../math/MathBasic')

describe('A Figure Calculator', () => {
  it('Should contain calculateRectanglePerimeter function', () => {
    const figureCalculator = new FigureCalculator({})
    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter')
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function)
  })

  it('Should contain calculateRectanlgeArea function', () => {
    const figureCalculator = new FigureCalculator({})
    expect(figureCalculator).toHaveProperty('calculateRectangleArea')
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function)
  })

  it('Should contain calculateTrianglePerimeter function', () => {
    const figureCalculator = new FigureCalculator({})
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter')
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function)
  })

  it('Should contain calculateTriangleArea', () => {
    const figureCalculator = new FigureCalculator({})
    expect(figureCalculator).toHaveProperty('calculateTriangleArea')
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function)
  })

  describe('A calculateRectanglePerimeter function', () => {
    it('Should throw an error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})
      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3, 4)).toThrowError()
    })

    it('Should throw an error when not given number parameters', () => {
      const figureCalculator = new FigureCalculator({})
      expect(() => figureCalculator.calculateRectanglePerimeter(1, '4')).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter(false, undefined)).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter(null, true)).toThrowError()
    })

    it('Should return correct result', () => {
      const figureCalculator = new FigureCalculator(MathBasic)

      // SPY
      const length = 4
      const width = 8
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')

      // Action
      const result = figureCalculator.calculateRectanglePerimeter(length, width)

      expect(result).toEqual(24)
      expect(spyAdd).toBeCalledWith(length, width)
      expect(spyMultiply).toBeCalledWith(2, 12)
    })
  })

  describe('A calculateRectangleArea function', () => {
    it('Should throw an error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})
      expect(() => figureCalculator.calculateRectangleArea()).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3, 4)).toThrowError()
    })

    it('Should throw an error when not given number parameter', () => {
      const figureCalculator = new FigureCalculator({})
      expect(() => figureCalculator.calculateRectangleArea(1, '2')).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(false, undefined)).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea({}, [])).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(null, 'string')).toThrowError()
    })

    it('Should throw an return correct result', () => {
      const figureCalculator = new FigureCalculator(MathBasic)

      const length = 4
      const width = 8
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')

      const result = figureCalculator.calculateRectangleArea(length, width)

      expect(result).toEqual(32)
      expect(spyMultiply).toBeCalledWith(length, width)
    })
  })

  describe('A calculateTrianglePerimeter function', () => {
    it('Should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3)).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError()
    })

    it('Should throw error when not given number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTrianglePerimeter(1, '2')).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(false, undefined)).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter([], {})).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(null, 'string')).toThrowError()
    })

    it('Should return correct result', () => {
      const figureCalculator = new FigureCalculator(MathBasic)

      const sideA = 3
      const sideB = 4
      const base = 5
      const spyAdd = jest.spyOn(MathBasic, 'add')

      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base)

      expect(result).toEqual(12) // (sideA + sideB + base)
      expect(spyAdd).toBeCalledWith(sideA, (sideB + base))
    })
  })

  describe('A calculateTriangleArea function', () => {
    it('Should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTriangeArea()).toThrowError()
      expect(() => figureCalculator.calculateTriangeArea(1)).toThrowError()
      expect(() => figureCalculator.calculateTriangeArea(1, 2, 3)).toThrowError()
      expect(() => figureCalculator.calculateTriangeArea(1, 2, 3, 4)).toThrowError()
    })

    it('Should throw error when not given number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTriangleArea(1, '2')).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea(false, undefined)).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea([], {})).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea(null, 'string')).toThrowError()
    })

    it('Should return correct result', () => {
      const figureCalculator = new FigureCalculator(MathBasic)

      const base = 3
      const height = 4
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const spyDivide = jest.spyOn(MathBasic, 'divide')

      const result = figureCalculator.calculateTriangleArea(base, height)

      expect(result).toEqual(6)
      expect(spyMultiply).toBeCalledWith(base, height)
      expect(spyDivide).toBeCalledWith((base * height), 2)
    })
  })
})
