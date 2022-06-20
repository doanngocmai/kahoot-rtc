interface QuestionChoice {
  isCorrect: boolean,
  text: string,
  image: string,
}

interface Question {
  id: string,
  text: string,
  image: string,
  youtubeUrl: string,
  choices: QuestionChoice[],
  actions?: any
}
