import { getType, showModal, hideModal } from "../actions/index.js";
import { INIT_STATE } from "../constants";

export default function modalReducer(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return {
                isShowed: true,
            }
        case getType(hideModal):
            return {
               isShowed: false,
            }
        default:
            return state;
    }
}