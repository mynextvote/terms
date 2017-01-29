export function getTerms (state) {
  if(!state) {
    throw new Error('Please specify a state code like "CA"')
  }
  switch (state) {
    case 'AZ':
    case 'CT':
    case 'GA':
    case 'ID':
    case 'MA':
    case 'ME':
    case 'NC':
    case 'NY':
    case 'RI':
    case 'SD':
      return {
        house: 2,
        senate: 2,
        governor: 4
      }
    case 'AL':
    case 'LA':
    case 'MD':
    case 'MO':
    case 'MS':
    case 'ND':
      return {
        house: 4,
        senate: 4,
        governor: 4
      }
    case 'NE':
      return {
        senate: 4,
        governor: 4

      }
    case 'NH':
    case 'VT':
      return {
        house: 2,
        senate: 2,
        governor: 2
      }
    default:
      return {
        house: 2,
        senate: 4,
        governor: 4
      }
  }
}

