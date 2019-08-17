$(document).ready(function() {
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		$('.shopping-list').append("<li>" + '<span class="shopping-item">' +
			$('input:first').val() + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' + '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' + '</li>')
	});
	$('.shopping-list').on('click', '.shopping-item-delete', function(event){
		this.closest('li').remove();
	})
	.on('click', '.shopping-item-toggle', function(){
		$(this).parent().siblings('span').toggleClass("shopping-item__checked");
	});
});