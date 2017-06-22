export function saveUser(data) {
    return dispatch => {
        return fetch('/api/users', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}