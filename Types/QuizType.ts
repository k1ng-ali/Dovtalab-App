export interface MainQuiz {
    id: number;
    question: string;
    correctAnswer: string;
    answers: {
        [key: string]: string; // ключи: A, B, C, D
    };
}
