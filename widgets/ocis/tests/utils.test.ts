import { formatNumberValue, formatIntValue, formatFloatValue } from '../src/utils'

describe('formatFloatValue', () => {
  it('should format a float value correctly', () => {
    expect(formatFloatValue('123.456')).toBe('123.46')
    expect(formatFloatValue('-123.456')).toBe('123.45')
    expect(formatFloatValue('0')).toBe('0')
    expect(formatFloatValue('abc')).toBe('')
  })
})

describe('formatIntValue', () => {
  it('should format an integer value correctly', () => {
    expect(formatIntValue('123456')).toBe('123,456')
    expect(formatIntValue('-123456')).toBe('-123,456')
    expect(formatIntValue('0')).toBe('0')
    expect(formatIntValue('abc')).toBe('')
  })
})

describe('formatNumberValue', () => {
  it('should format a number value correctly', () => {
    expect(formatNumberValue('123.456')).toBe('123.46')
    expect(formatNumberValue('-123.456')).toBe('123.45')
    expect(formatNumberValue('123456')).toBe('123,456')
    expect(formatNumberValue('-123456')).toBe('-123,456')
    expect(formatNumberValue('0')).toBe('0')
    expect(formatNumberValue('abc')).toBe('abc')
  })
})