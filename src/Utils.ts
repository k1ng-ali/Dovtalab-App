import type {MainQuiz} from "../Types/QuizType.ts"
import biologyData from "../public/data/Biology.json";
import zabonData from "../public/data/Zabon.json";
import historyData from "../public/data/History.json";
import geographyData from "../public/data/Geography.json";
import literatureData from "../public/data/Literature.json";

type RawQuestion = {
    num?: string;
    number?: string;
    question: string;
    CorrectAnswers: string;
    answers: {
        [key: string]: string | undefined;
    };
};

export function parseRawQuestions(data: RawQuestion[]): MainQuiz[] {
    return data
        .filter(q => Object.keys(q.answers).length >= 4)
        .map((q, index) => ({
            id: Number(q.num) || Number(q.number) ||index + 1,
            question: q.question,
            correctAnswer: q.CorrectAnswers,
            answers: {
                A: q.answers["А"] || q.answers["A"] || "",
                B: q.answers["В"] || q.answers["B"] || "",
                C: q.answers["С"] || q.answers["C"] || "",
                D: q.answers["D"] || "", // если ключ 'D' действительно латиницей
            }
        }));
}

const subjectDataMap: Record<string, RawQuestion[]> = {
    biology: biologyData,
    history: historyData,
    geography: geographyData,
    literature: literatureData,
    lang: zabonData,
};

export function loadSubjectData(subject: string): MainQuiz[] | null {
    const raw = subjectDataMap[subject];
    if (!raw) return null;
    return parseRawQuestions(raw);
}
