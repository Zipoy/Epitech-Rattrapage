const clientId = '11c8dcf7a8431a2'

export function fetchFavorisGet(token, user) {
    const url = 'https://api.imgur.com/3/account/' + user + '/favorites/';
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then((response) => response.json())
        .catch((error) => console.error(error));
}

export function fetchVotes(token, imageHash) {
    const url = 'https://api.imgur.com/3/gallery/image/'+ imageHash + '/votes';
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Client-ID 11c8dcf7a8431a2'
        }
    }).then((response) => response.json())
        .catch((error) => console.error(error));
}

export function fetchFavorisPost(token, imageHash) {
    const url = 'https://api.imgur.com/3/image/' + imageHash + '/favorite';
    return fetch(url, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then((response) => response.json())
        .catch((error) => console.error(error));
}


export function fetchSearch(token, tag) {
    const url = 'https://api.imgur.com/3/gallery/search?q=' + tag;
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then((response) => response.json())
        .catch((error) => console.error(error));
}

export function fetchUser(token, user) {
    const url = 'https://api.imgur.com/3/account/'+ user +'/images';
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then((response) => response.json())
        .catch((error) => console.error(error));
}


