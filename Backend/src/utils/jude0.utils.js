import axios from 'axios'

export const getJudge0LangunageId = (language) => {
  const languageMap = {
    "PYTHON": 71,
    "JAVA": 62,
    "JAVASCRIPT": 63
  }

  return languageMap[language.toUpperCase()]
}

export const getLanguageById = (languageId) => {
  const languages = {
    71: "Python",
    62: "Java",
    63: "JavaScript"
  }

  return languages[languageId] || "Unknown"
}

export const submitBatch = async (submissions) => {
  const { data } = await axios.post(`${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`, { submissions })

  return data
}

const sleep = (ms) => (
  new Promise(resolve => (
    setTimeout(resolve, ms)
  ))
)

export const pollbatchResults = async (tokens) => {
  while(true) {
    const { data } = await axios.get(`${process.env.JUDGE0_API_URL}/submissions/batch`, {
      params: {
        tokens: tokens.join(","),
        base64_encoded: false
      }
    })
  
    const results = data.submissions

    const allDone = results.every(r => r.status.id >= 3) 

    if(allDone) {
      return results
    }

    await sleep(1000)
  }
}