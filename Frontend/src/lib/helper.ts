export function getLanguageName(languageId: number) {
  const LANGUAGE_NAMES: { [key: number]: string } = {
    74: "TypeScript",
    63: "JavaScript",
    71: "Python",
    62: "Java",
  };
  return LANGUAGE_NAMES[languageId] || "Unknown";
}


export function getLanguageId(language: string) {
  const languageMap: { [key: string]: number } = {
    "PYTHON": 71,
    "JAVASCRIPT": 63,
    "JAVA": 62,
    "TYPESCRIPT": 74,
  };
  return languageMap[language.toUpperCase()];
}