import axios from 'axios';

const initialState = {
    test: 'nope'
}

const TEST = 'TEST';

export function doTest(){
    return {
        type: TEST,
        payload: 'yep'
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case TEST:
            return Object.assign({}, state, {test: action.payload});
        
        default:
            return state;
    }
}