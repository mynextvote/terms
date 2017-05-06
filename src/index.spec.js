import { getTerms } from './index'

describe('getTerms', () => {
  const expected = {
    house: 2,
    senate: 4,
    governor: 4
  }

  const checkState = (state, outlier) =>
    expect(getTerms(state)).toEqual({ ...expected, ...outlier })

  it('should return default terms', () => {
    const result = getTerms('CA')
    expect(result).toEqual(expected)
  })

  it('should throw an error if no state is specified', () => {
    expect(() => getTerms()).toThrow()
  })

  describe('special cases', () => {
    describe('states with two year senate terms', () => {
      const states = ['AZ', 'CT', 'GA', 'ID', 'MA', 'ME', 'NC', 'NY', 'RI', 'SD']

      it('should return the correct terms for relevant states', () => {
        states.map(state => checkState(state, { senate: 2 }))
      })
    })

    describe('states with four year house terms', () => {
      const states = ['AL', 'LA', 'MD', 'MO', 'MS', 'ND']

      it('should return the correct terms for relevant states', () => {
        states.map(state => checkState(state, { house: 4 }))
      })
    })

    describe('states with two year senate and governor terms', () => {
      const states = ['NH', 'VT']

      it('should return the correct terms for relevant states', () => {
        states.map(state => checkState(state, { senate: 2, governor: 2 }))
      })
    })

    describe('a unique snowflake', () => {
      it('should return the correct terms for Nebraska', () => {
        const result = getTerms('NE')
        expect(result).toEqual({ ...expected, house: undefined })
      })
    })
  })
})
