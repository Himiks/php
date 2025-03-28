const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');




const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline';
    closeNavBtn.style.display = 'none';
}



window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        navItems.style.display = 'flex';
        openNavBtn.style.display = 'none';
        closeNavBtn.style.display = 'none';
    } else {
        navItems.style.display = 'none';
        openNavBtn.style.display = 'inline-block';
    }
});


openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);




const sidebar = document.querySelector('aside');
const showSideBarBtn = document.querySelector('#show__sidebar-btn');
const hideSideBarBtn = document.querySelector('#hide__sidebar-btn');




const showSideBar = () => {
    sidebar.style.left='0';
    showSideBarBtn.style.display = 'none';
    hideSideBarBtn.style.display = 'inline-block';
}


const hideSideBar = () => {
    sidebar.style.left = '-100%';
    showSideBarBtn.style.display = 'inline-block';
    hideSideBarBtn.style.display = 'none';
}
    




showSideBarBtn.addEventListener('click', showSideBar);
hideSideBarBtn.addEventListener('click', hideSideBar);



