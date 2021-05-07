const menu = document.querySelector('.menu'); 
const item = document.querySelectorAll('.item');
const menuItems = document.querySelectorAll('.menu_item')

function filter() {
    menu.addEventListener('click', e => {
        const targetId = e.target.dataset.id
        const target = e.target 
        
        if(target.classList.contains('menu_item')) {
            menuItems.forEach(item => {
            item.classList.remove('active')
        })
        target.classList.add('active')
        }

        switch (targetId) {
            case 'all':
                getItems('item-list')
                break;
            case 'Bike': 
                getItems(targetId)
                break;
            case 'Plane':
                getItems(targetId)
                break;
            case 'Ship':
                getItems(targetId)
                break;
            case 'Car': 
                getItems(targetId)
                break;
            default:
                break;
        }
    })
}

filter()


function getItems(target) {
    item.forEach(i => {
        if (i.classList.contains(target)) {
            i.style.display = 'block'
        } else {
            i.style.display = 'none'
        }
    })
}