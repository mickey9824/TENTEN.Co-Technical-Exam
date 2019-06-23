(function(){
	var menu = document.querySelector('aside'),
		menulink = document.querySelector('img');
	menulink.addEventListener('click', function(e) {
		menu.classList.toggle('action_menu');
		e.preventDefault();
	});
})();