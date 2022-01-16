const createServer = require('./CreateServer')
const MathBasic = require('../math/MathBasic')
const FigureCalculator = require('../geometry/FigureCalculator')

describe('A HTTP server', () => {
  describe('when GET /add', () => {
    it('Should respond with 200 status code and the payload values is addition of a and b correctly', async () => {
      // Arrange
      const a = 4
      const b = 10
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const server = createServer({ mathBasic: MathBasic })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      })

      const responseJSON = JSON.parse(response.payload)

      // Assert
      expect(response.statusCode).toEqual(200)
      expect(responseJSON.value).toEqual(14)
      expect(spyAdd).toBeCalledWith(a, b)
    })
  })

  describe('when GET /subtract', () => {
    it('Should respond with 200 code and payload value is subtraction of a and b correcyly', async () => {
      // Arrange
      const a = 4
      const b = 10
      const spySubtract = jest.spyOn(MathBasic, 'subtract')
      const server = createServer({ mathBasic: MathBasic })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      })

      const responseJSON = JSON.parse(response.payload)

      // Assert
      expect(response.statusCode).toEqual(200)
      expect(responseJSON.value).toEqual(-6)
      expect(spySubtract).toBeCalledWith(a, b)
    })
  })

  describe('when GET /multiply', () => {
    it('Should respond with 200 code and payload value is multiplication of a and b correctly', async () => {
      // Arrange
      const a = 4
      const b = 10
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const server = createServer({ mathBasic: MathBasic })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      })

      const responseJSON = JSON.parse(response.payload)

      // Assert
      expect(response.statusCode).toEqual(200)
      expect(responseJSON.value).toEqual(40)
      expect(spyMultiply).toBeCalledWith(a, b)
    })
  })

  describe('when GET /divide', () => {
    it('Should respond with 200 code and payload value is division of a and b correctly', async () => {
      // Arrange
      const a = 10
      const b = 2
      const spyDivide = jest.spyOn(MathBasic, 'divide')
      const server = createServer({ mathBasic: MathBasic })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      })

      const responseJSON = JSON.parse(response.payload)

      // Assert
      expect(response.statusCode).toEqual(200)
      expect(responseJSON.value).toEqual(5)
      expect(spyDivide).toBeCalledWith(a, b)
    })
  })

  describe('when GET /rectangle/perimeter', () => {
    it('Should respond with 200 code and payload value is the result of calculating the rectangle perimeter correctly', async () => {
      // Arrange
      const a = 4
      const b = 10
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyCalculateRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter')
      const server = createServer({ figureCalculator })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${a}/${b}`,
      })

      const responseJSON = JSON.parse(response.payload)

      // Assert
      expect(response.statusCode).toEqual(200)
      expect(responseJSON.value).toEqual(28)
      expect(spyCalculateRectanglePerimeter).toBeCalledWith(a, b)
    })
  })

  describe('when GET /rectangle/area', () => {
    it('Should respond with 200 code and payload value is the result of calculating the rectangle area correctly', async () => {
      // Arrange
      const a = 4
      const b = 10
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea')
      const server = createServer({ figureCalculator })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${a}/${b}`,
      })

      const responseJSON = JSON.parse(response.payload)

      // Assert
      expect(response.statusCode).toEqual(200)
      expect(responseJSON.value).toEqual(40)
      expect(spyCalculateRectangleArea).toBeCalledWith(a, b)
    })
  })

  describe('when GET /triangle/perimeter', () => {
    it('Should respond with 200 code and payload value is the result of calculating the triangle perimeter correctly', async () => {
      // Arrange
      const sideA = 3
      const sideB = 5
      const base = 4
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyCalculateTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter')

      const server = createServer({ figureCalculator })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      })

      const responseJSON = JSON.parse(response.payload)

      // Assert
      expect(response.statusCode).toEqual(200)
      expect(responseJSON.value).toEqual(12)
      expect(spyCalculateTrianglePerimeter).toBeCalledWith(sideA, sideB, base)
    })
  })

  describe('when GET /triangle/area', () => {
    it('Should respond with 200 code and payload value is the result of calculating the triangle area correctly', async () => {
      // Arrange
      const height = 4
      const base = 5
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea')
      const server = createServer({ figureCalculator })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      })

      const responseJSON = JSON.parse(response.payload)

      // Assert
      expect(response.statusCode).toEqual(200)
      expect(responseJSON.value).toEqual(10)
      expect(spyCalculateTriangleArea).toBeCalledWith(base, height)
    })
  })
})
