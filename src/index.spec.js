import { getTerms } from './index'

describe('getTerms', () => {
  it('should return default terms', () => {
    const expected = {
      house: 2,
      senate: 4,
      governor: 4
    }

    const result = getTerms('CA')
    expect(result).toEqual(expected)
  })

  it('should throw an error if no state is specified', () => {
    expect(() => getTerms()).toThrow()
  })

  describe('special cases', () => {
    it('should return the correct terms for Alabama', () => {
      const expected = {
        house: 4,
        senate: 4,
        governor: 4
      }

      const result = getTerms('AL')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Arizona', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('AZ')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Conneticut', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('CT')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Georgia', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('GA')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Idaho', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('ID')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Louisiana', () => {
      const expected = {
        house: 4,
        senate: 4,
        governor: 4
      }

      const result = getTerms('LA')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Maine', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('ME')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Maryland', () => {
      const expected = {
        house: 4,
        senate: 4,
        governor: 4
      }

      const result = getTerms('MD')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Massachusets', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('MA')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Mississippi', () => {
      const expected = {
        house: 4,
        senate: 4,
        governor: 4
      }

      const result = getTerms('MS')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Missouri', () => {
      const expected = {
        house: 4,
        senate: 4,
        governor: 4
      }

      const result = getTerms('MO')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Nebraska', () => {
      const expected = {
        senate: 4,
        governor: 4
      }

      const result = getTerms('NE')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for New Hampshire', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 2
      }

      const result = getTerms('NH')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for New York', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('NY')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for North Carolina', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('NC')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for North Dakota', () => {
      const expected = {
        house: 4,
        senate: 4,
        governor: 4
      }

      const result = getTerms('ND')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Rhode Island', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('RI')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for South Dakota', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 4
      }

      const result = getTerms('SD')
      expect(result).toEqual(expected)
    })
    it('should return the correct terms for Vermont', () => {
      const expected = {
        house: 2,
        senate: 2,
        governor: 2
      }

      const result = getTerms('VT')
      expect(result).toEqual(expected)
    })
  })
})
