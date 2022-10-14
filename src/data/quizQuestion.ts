import {
  areaImg,
  numberImg,
  percentageImg,
  speedDistanceImg,
} from '../../src/assests'
import { QuizQuestion } from './quizQuestion.types'

export const quizQuestion : QuizQuestion[] = [
  {
    categoryId: '1',
    categoryName: 'Number',
    categoryImg: numberImg,
    questions: [
      {
        question:
          'What should be added to 1459 so that it is exactly divisible by 12?',
        points: 10,
        options: [
          {
            value: '14',
            isRight: false,
          },
          {
            value: '13',
            isRight: false,
          },
          {
            value: '5',
            isRight: true,
          },
          {
            value: '16',
            isRight: false,
          },
        ],
      },
      {
        question:
          'If the number 467X4 is divisible by 9, find the value of the digit marked as X.',
        points: 10,
        options: [
          {
            value: '4',
            isRight: false,
          },
          {
            value: '2',
            isRight: false,
          },
          {
            value: '6',
            isRight: true,
          },
          {
            value: '7',
            isRight: false,
          },
        ],
      },
      {
        question:
          'Which of the following is the output of 495 * 495 - 105 * 105?',
        points: 10,
        options: [
          {
            value: '234000',
            isRight: true,
          },
          {
            value: '360000',
            isRight: false,
          },
          {
            value: '300000',
            isRight: false,
          },
          {
            value: '350000',
            isRight: false,
          },
        ],
      },
      {
        question:
          'Find the largest 4 digit number that is exactly divisible by 66.',
        points: 10,
        options: [
          {
            value: '9987',
            isRight: false,
          },
          {
            value: '9912',
            isRight: false,
          },
          {
            value: '9916',
            isRight: false,
          },
          {
            value: '9966',
            isRight: true,
          },
        ],
      },
      {
        question:
          'Find the value of the expression:1+1/ (1+1/ (1+1/ (1+1 /x)))',
        points: 10,
        options: [
          {
            value: '(7x+3)/(5x+2)',
            isRight: false,
          },
          {
            value: ' (3x+3)/(7x+2)',
            isRight: false,
          },
          {
            value: '(5x+3)/(3x+2)',
            isRight: true,
          },
          {
            value: '(11x+3)/(9x+2)',
            isRight: false,
          },
        ],
      },
    ],
  },
  {
    categoryId: '2',
    categoryName: 'Percentage',
    categoryImg: percentageImg,
    questions: [
      {
        question:
          'A manufacturer wants to earn 20% profit on a table that cost Rs.1000, he should charge us ?',
        points: 10,
        options: [
          {
            value: '1200',
            isRight: true,
          },
          {
            value: '400',
            isRight: false,
          },
          {
            value: '800',
            isRight: false,
          },
          {
            value: '1000',
            isRight: false,
          },
        ],
      },
      {
        question: '65% of 200m is ?',
        points: 10,
        options: [
          {
            value: '100',
            isRight: false,
          },
          {
            value: '65',
            isRight: false,
          },
          {
            value: '240',
            isRight: false,
          },
          {
            value: '130',
            isRight: true,
          },
        ],
      },
      {
        question: 'Conversion of 0.33 in % is ?',
        points: 10,
        options: [
          {
            value: '33.33%',
            isRight: false,
          },
          {
            value: '33%',
            isRight: false,
          },
          {
            value: '3.33%',
            isRight: false,
          },
          {
            value: '333%',
            isRight: true,
          },
        ],
      },
      {
        question: 'Conversion of 5% in decimal is ?',
        points: 10,
        options: [
          {
            value: '0.5',
            isRight: false,
          },
          {
            value: '5/100',
            isRight: false,
          },
          {
            value: '0.05',
            isRight: true,
          },
          {
            value: '5',
            isRight: false,
          },
        ],
      },
      {
        question:
          'The length of a rectangle is increased by 20% and the width is decreased by 20%. The area decreases by',
        points: 10,
        options: [
          {
            value: '0.8%',
            isRight: false,
          },
          {
            value: '1.2%',
            isRight: false,
          },
          {
            value: '8%',
            isRight: false,
          },
          {
            value: '4%',
            isRight: true,
          },
        ],
      },
    ],
  },
  {
    categoryId: '3',
    categoryName: 'Area',
    categoryImg: areaImg,
    questions:[]
  },
  {
    categoryId: '4',
    categoryName: 'Speed and Distance',
    categoryImg: speedDistanceImg,
    questions:[]
  },
]
