export function obfJSON(inputJSON) {
  let jsonValues = String(inputJSON).match(/"[^"]*"|'[^']*'/g)
  let mapping = []
  if (Array.isArray(jsonValues)) {
    for (
      var obfuscatedJson = String(inputJSON), result = '', d = 0;
      d < jsonValues.length;
    ) {
      obfuscatedJson = obfuscatedJson.replace(
        jsonValues[d].replace('"', '').replace('"', ''),
        '' + unicodeEscape(jsonValues[d].replace('"', '').replace('"', '')),
      )
      let obfuscatedJsonValues = String(obfuscatedJson).match(/"[^"]*"|'[^']*'/g)
      mapping.push({ [jsonValues[d].replace('"', '').replace('"', '')]: obfuscatedJsonValues[d].replace('"', '').replace('"', '') })
      d++
    }

    mapping = getUniqueListBy(mapping, 'key')

    const final = {
      obfuscatedJSON: obfuscatedJson,
      mapping: mapping
    }

    return final
  }
}

function unicodeEscape(a) {
  for (var b = '', c = 0, d; !isNaN((d = a.charCodeAt(c++)));)
    b += '\\u' + ('0000' + d.toString(16)).slice(-4)
  return b
}

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}