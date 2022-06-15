export interface AnswerItem {
    id: number,
    text: string
}

export interface Question {
    id: number;
    question: string,
    answers: Array<AnswerItem>,
    value: number,
    read: boolean
}

const questions: Question[] = [
    {
        id: 1,
        question: 'Как классифицируются помещения в отношении опасности поражения людей электрическим током?',
        answers: [
            {
                id: 1,
                text: 'Помещения без повышенной опасности и помещения с повышенной опасностью'
            },
            {
                id: 2,
                text: 'Помещения без повышенной опасности, помещения с повышенной опасностью, особо опасные помещения'
            },
            {
                id: 3,
                text: 'Неопасные, опасные и особо опасные помещения'
            },
            {
                id: 4,
                text: 'Неопасные, малоопасные, опасные и особо опасные помещения'
            },
        ],
        value: 2,
        read: false
    },
    {
        id: 2,
        question: 'Какие помещения, согласно Правилам устройств электроустановок, называются сырыми?',
        answers: [
            {
                id: 1,
                text: 'Помещения, в которых относительная влажность воздуха не превышает 60%'
            },
            {
                id: 2,
                text: 'Помещения, в которых относительная влажность воздуха превышает 75%'
            },
            {
                id: 3,
                text: 'Помещения, в которых относительная влажность воздуха не превышает 90%'
            },
            {
                id: 4,
                text: 'Помещения, в которых относительная влажность воздуха близка к 100%'
            },
        ],
        value: 2,
        read: false
    },
    {
        id: 3,
        question: 'Какие помещения, согласно Правилам устройств электроустановок, относятся к влажным?',
        answers: [
            {
                id: 1,
                text: 'Помещения, в которых относительная влажность воздуха больше 60 %, но не превышает 75%'
            },
            {
                id: 2,
                text: 'Помещения, в которых относительная влажность воздуха в пределах 80%'
            },
            {
                id: 3,
                text: 'Помещения, в которых относительная влажность воздуха больше 75 %, но не превышает 90%'
            },
            {
                id: 4,
                text: 'Помещения, в которых относительная влажность воздуха близка к 100%'
            },
        ],
        value: 1,
        read: false
    },
];

export const getQuestions = () => questions;

export const getQuestion = (id: number) => questions.find(m => m.id === id);