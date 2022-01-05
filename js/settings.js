let friendsSort = localStorage.friendSort || 'name';
let emailsSort = localStorage.emailSort || '';

export function setFriendSort(sort) {
    friendsSort = sort;
    localStorage.friendSort = sort;
}

export function setEmailSort(sort) {
    emailsSort = sort;
    localStorage.emailSort = sort;
}

export function getFriendSort() {
    return friendsSort
}

export function getEmailSort() {
    return emailsSort
}