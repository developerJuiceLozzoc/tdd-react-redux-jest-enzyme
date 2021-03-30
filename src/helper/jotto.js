

function getLetterMatchCount(str1,str2){
  let letters = str2.split("")
  let guessed = new Set(str1.split(""))
  const letterSet = new Set(letters)
  let accum = 0
  for (let item of guessed.keys()) {
    if(letterSet.has(item)){
      accum += 1
    }
  }

  return accum
}

export {
  getLetterMatchCount
}
