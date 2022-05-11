addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btnMenu');
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items');
            menu_items.classList.toggle('show');
        })
    }
});