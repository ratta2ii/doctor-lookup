export function phoneNumberConverter(str){
  return `1 + (${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6)}`;
}
