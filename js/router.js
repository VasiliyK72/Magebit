import Controller from './controller.js';
import friendsPage from './pages/friends.js';

const button_delete = document.getElementById('delete');
const button_all = document.getElementById('all');

function getRouteInfo() {
    const hash = location.hash ? location.hash.slice(1) : '';
    const [name, id] = hash.split('/');
    
    return { name, params: { id }}
}

function handleHash() {
    const { name, params } = getRouteInfo();
    
    if(name) {
        const routeName = name + 'Route';
        Controller[routeName](params);
    }
}

function handleDelete() {
    console.log('Delete id ' + button_delete.dataset.id);
    send_comand( {act: "delete", id: button_delete.dataset.id}, 
        function(R) {
            console.log('Success');
            console.log(R);
            window.location.href = 'list.html#friends';
        },
        function(R) {
            console.log('Error');
            console.log(R);
        }
    );
}

function handleAll() {
    console.log('All button');
    friendsPage.setEmailSorting('');
    //location.reload();
    window.dispatchEvent(new HashChangeEvent("hashchange"));
}


export default {
    init() {
        addEventListener('hashchange', handleHash);
        handleHash();
        
        button_delete.addEventListener('click', handleDelete);
        button_all.addEventListener('click', handleAll);
        button_delete.classList.add('d-none');
    }
}