import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    question: "1. Who created Sherlock Holmes?",
    options: [
      {
        id: uuidv4(),
        value: "A. Bob Kane",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "B. Ian Fleming",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "C. Arthur Conan Doyle",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: true,
      },
      {
        id: uuidv4(),
        value: "D. John Lennon",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
    ],
    correctAnswer: "C. Arthur Conan Doyle",
  },
  {
    id: uuidv4(),
    question:
      "2. Which two countries have not missed one of the modern-day Olympics?",
    options: [
      {
        id: uuidv4(),
        value: "A. India and Pakistan",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "B. England and USA",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "C. Pakistan and New zealand",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "D. Greece and Australia",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: true,
      },
    ],
    correctAnswer: "D. Greece and Australia",
  },
  {
    id: uuidv4(),
    question: "3. In what type of matter are atoms most tightly packed?",
    options: [
      {
        id: uuidv4(),
        value: "A. Solid",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: true,
      },
      {
        id: uuidv4(),
        value: "B. Liquid",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "C. Gas",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "D. Atom",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
    ],

    correctAnswer: "A. Solid",
  },

  {
    id: uuidv4(),
    question: "4. What is a duel between three people called?",
    options: [
      {
        id: uuidv4(),
        value: "A. Cruel",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "B. Duel",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
      {
        id: uuidv4(),
        value: "C. Truel",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: true,
      },
      {
        id: uuidv4(),
        value: "D. Single",
        valueSelected: false,
        valueNotSelected: false,
        isCorrectAns: false,
      },
    ],

    correctAnswer: "C. Truel",
  },
];

export { data };

