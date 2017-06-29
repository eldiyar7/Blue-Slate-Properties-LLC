export default function registered(state = {}, action) {
    switch (action.type) {
        case 'REGISTER_USER': {
            return {...state, user: action.user}
        }
        default:
            return state;
    }
}