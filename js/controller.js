import Model from './model.js';
import friendsPage from './pages/friends.js';
import friendPage from './pages/friend.js';

const newsNavNode       = document.querySelector('[data-role=nav-news]');
const friendsNavNode    = document.querySelector('[data-role=nav-friends]');

let activeNavNode;

function setActiveNavNode(node) {
    if(activeNavNode) {
        activeNavNode.classList.remove('active');
    }
    
    activeNavNode = node;
    activeNavNode.classList.add('active');
}

export default {
    async friendsRoute(params) {
        if(params.id) {
            console.log('Friend ' + params.id);
            const friend = await Model.getUser(params.id);
            console.log(friend);
            friendPage.setData(friend);
            friendPage.render();
        } else {
            console.log('Friend');
            const friends = await Model.getFriends();
            
            friendsPage.setData(friends.items);
            friendsPage.render();
        }
        
        setActiveNavNode(friendsNavNode);
    },
    async newsRoute() {
        console.log('News');
        
        setActiveNavNode(newsNavNode);
    }
}