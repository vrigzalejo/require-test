/**
 * Created by vrigzlinuxmint13 on 1/10/16.
 */
define(['jquery'], function($) {

	var Methods = {
		doSomething: function() {
			$('#foo').text('[changed by jQuery]');

			alert('I just did something');
		}
	};

	return Methods;
});