import * as settings from "../settings.js";
import * as utils from "../utils.js";
import View from "../view.js";

const resultsNode = document.querySelector('#results');
let items = [];
let items2 = [];
let sorting = settings.getFriendSort();
let emails = settings.getEmailSort();

const button_delete = document.getElementById('delete');

export default {
    setData(newItems) {
        items = newItems;
        button_delete.classList.add('d-none');
    },
    
    setSorting(newSorting) {
        sorting = newSorting;
        settings.setFriendSort(newSorting);
    },
    
    setEmailSorting(newSorting) {
        emails = newSorting;
        settings.setEmailSort(newSorting);
    },
    
    render() {
        if(sorting === 'name') {
            utils.sortByName(items);
        } else if(sorting === 'bday') {
            utils.sortByBDay(items);
        }
        items2 = items;
        
        console.log('sortByEmail '+emails);
        if( emails !== '' ) {
            items2 = utils.sortByEmail(items, emails);
        }
        
        
        resultsNode.innerHTML = View.render('friends', { list: items2 });
        
        const sort = resultsNode.querySelector('[data-role=sort]');
        const sort_email = resultsNode.querySelector('[data-role=gmail]');
        
        sort.value = sorting;
        sort.addEventListener('change', e => {
            this.setSorting(e.target.value);
            this.render();
        });
        
        sort_email.addEventListener('click', e => {
            this.setEmailSorting('gmail');
            this.render();
        })
    }
}