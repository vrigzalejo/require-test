/**
 * Created by vrigzlinuxmint13 on 1/5/16.
 */

requirejs.config( {
	baseUrl: 'scripts',
	paths: {
		jquery: [
			'//code.jquery.com/jquery-2.2.0',
			'lib/jquery'
		],
		modernizr: 'lib/Modernizr',
		underscore: 'lib/underscore',
		dropzone: 'lib/dropzone-amd-module',
		backbone: 'lib/backbone'
	}
} );


/*
require( [ 'jquery', 'message', 'another-module' ], function( $, message, anotherModule ) {
	$( '#output' ).html( message + ' ' + anotherModule );
} );*/
