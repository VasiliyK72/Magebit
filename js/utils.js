export function sortByBDay(list) {
    return list.sort((a,b) => {
        if(!a.time) {
            return 1;
        } else if(!b.time) {
            return -1;
        }
        
        return a.time - b.time;
    });
}

export function sortByName(list) {
    return list.sort((a,b) => {
        
        return a.email.localeCompare(b.email);
    })
}

export function sortByEmail(list, domain) {
    return list.filter((a) => a.email.includes(domain) );
}