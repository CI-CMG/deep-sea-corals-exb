export const floatRegex = /^-?\d+\.\d+$/
export const intRegex = /^-?\d+$/

export function formatFloatValue (str: string): string {
  const num = parseFloat(str)
  if (Number.isNaN(num)) {
    return ''
  }
  // round *up* to 2 decimal places for display purposes. Always use positive values
  return (Math.abs(Math.ceil(num * 100) / 100)).toLocaleString()
}

export function formatIntValue (str: string): string {
  const num = parseInt(str)
  // if string cannot be parsed to a number, return empty string to avoid displaying "NaN"
  if (Number.isNaN(num)) {
    return ''
  }
  return num.toLocaleString()
}


export function formatNumberValue (str:string):string {
    // String.includes() not supported in IE11, so use regex to determine if the string is a float or an int
  if (floatRegex.test(str)) {
    return formatFloatValue(str)
  } else if (intRegex.test(str)) {
    return formatIntValue(str)
  } else {
    return str
  }
}
