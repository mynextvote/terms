import { getTerms } from './index'

describe('getTerms', () => {
  let expected = {
      house: 2,
      senate: 4,
      governor: 4
  }

  it('should return default terms', () => {
    const result = getTerms('CA')
    expect(result).toEqual(expected)
  })

  it('should throw an error if no state is specified', () => {
    expect(() => getTerms()).toThrow()
  })

  describe('special cases', () => {
   
    it('should return the correct terms for Alabama', () => {
      const result = getTerms('AL')
      expect(result).toEqual({ ...expected, house: 4 })
    })

    it('should return the correct terms for Arizona', () => {
      const result = getTerms('AZ')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for Conneticut', () => {
      const result = getTerms('CT')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for Georgia', () => {
      const result = getTerms('GA')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for Idaho', () => {
      const result = getTerms('ID')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for Louisiana', () => {
      const result = getTerms('LA')
      expect(result).toEqual({ ...expected, house: 4 })
    })

    it('should return the correct terms for Maine', () => {
      const result = getTerms('ME')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for Maryland', () => {
      const result = getTerms('MD')
      expect(result).toEqual({ ...expected, house: 4 })
    })

    it('should return the correct terms for Massachusets', () => {
      const result = getTerms('MA')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for Mississippi', () => {
      const result = getTerms('MS')
      expect(result).toEqual({ ...expected, house: 4 })
    })

    it('should return the correct terms for Missouri', () => {
      const result = getTerms('MO')
      expect(result).toEqual({ ...expected, house: 4 })
    })

    it('should return the correct terms for Nebraska', () => {
      const result = getTerms('NE')
      expect(result).toEqual({ ...expected, house: undefined })
    })

    it('should return the correct terms for New Hampshire', () => {
      const result = getTerms('NH')
      expect(result).toEqual({ ...expected, senate: 2, governor: 2 })
    })

    it('should return the correct terms for New York', () => {
      const result = getTerms('NY')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for North Carolina', () => {
      const result = getTerms('NC')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for North Dakota', () => {
      const result = getTerms('ND')
      expect(result).toEqual({ ...expected, house: 4 })
    })

    it('should return the correct terms for Rhode Island', () => {
      const result = getTerms('RI')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for South Dakota', () => {
      const result = getTerms('SD')
      expect(result).toEqual({ ...expected, senate: 2 })
    })

    it('should return the correct terms for Vermont', () => {
      const result = getTerms('VT')
      expect(result).toEqual({ ...expected, senate: 2, governor: 2 })
    })
  })
})
