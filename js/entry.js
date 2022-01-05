import Model from './model.js';
import View from './view.js';
import Router from './router.js';


(async () => {
    try {
        const header = document.querySelector('#header');
        const me = await Model.getAuthor();
        console.log(me);
        
        header.innerHTML = View.render('header', me);
        Router.init();
    } catch (e) {
        console.log(e);
        alert('Error: ' + e.message);
    }
    
})();