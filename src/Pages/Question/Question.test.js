import { quizReducer } from "../../hooks/Reducer/quizReducer";

const initialState = {
    rightAnsArr:[],
    selectedOptions: []
}

describe("testing quiz reducer", () => {
    test("properly add selected options", () => {
        const action = {
            type:"SLECTED_OPTION",
            payload:[]
        }

     const state = quizReducer(initialState, action)

        const expectedState = {
            rightAnsArr:[],
            selectedOptions:[]
        }

        expect(state).toEqual(expectedState)
    })

    test("Currect answer", () => {

        const action = {
            type:"CURRECT_ANS",
            payload:2
        }


     const state = quizReducer(initialState, action)

        const expectedState = {
            rightAnsArr:[2],
            selectedOptions:[]
        }

        expect(state).toEqual(expectedState)

    })

    test('Reset when new quiz starts', () => {

        const action = {
            type:"RESET",
            payload:[]
        }

        const state = quizReducer(initialState, action)

        const expectedState = {
            rightAnsArr:[],
            selectedOptions: []
        }

        expect(state).toEqual(expectedState)

    })

})
