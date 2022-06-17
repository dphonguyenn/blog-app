import { getType, actionsList } from "../actions/index.js";
import { INIT_STATE } from "../constants";

export default function actionsListReducer(state = INIT_STATE.actions_list, action) {
    switch (action.type) {
        case getType(actionsList.show):
            return {
                idPost: action.payload.id
            }
        case getType(actionsList.hide):
            return {
                idPost: action.payload.id
            }
        default:
            return state;
    }
}