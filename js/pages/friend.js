import View from "../view.js";

const resultsNode = document.querySelector('#results'); 
let friend = {};
const button_delete = document.getElementById('delete');


export default {
    setData(newFriend) {
        friend = newFriend;
        button_delete.classList.remove('d-none');
        button_delete.dataset.id = friend.id;
    },
    
    render() {
        resultsNode.innerHTML = View.render('friend', friend);
        
    }
}