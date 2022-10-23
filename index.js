import { obfJSON } from "./obfuscateJSON.js"

export const obfuscateJSON = (input) => {
  const obfuscated = obfJSON(input)
  return obfuscated
}