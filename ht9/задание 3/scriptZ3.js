var menu = document.getElementById('root');

menu.addEventListener('click', function(event) {
    var dropList = event.target.parentNode.children[1];
    dropList.classList.toggle('open');
})

menu.addEventListener('focusout', function(event) {
    var dropList = event.target.parentNode.children[1];
    dropList.children.remove('open');
})