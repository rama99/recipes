"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var initialState = {
    recipes: [],
    current_page: 0
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.ActionTypes.LOAD_RECIPE_SUCCESS:
            console.log('LOGGGGG', action.payload);
            return Object.assign({}, state, { recipes: action.payload });
        case actions_1.ActionTypes.ADD_RECIPE_SUCCESS:
            return state;
        case actions_1.ActionTypes.ADD_COMMENTS_SUCCESS:
            return state;
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map