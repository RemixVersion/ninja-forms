/**
 * Listens for our update:db response and replaces tmp ids with new ids if we were performing the publish action.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */
define( [], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			// Listen to our app channel for the updateDB response.
			this.listenTo( nfRadio.channel( 'app' ), 'response:updateDB', this.publishResponse );
		},

		publishResponse: function( response ) {
			// If we aren't performing a publish action, bail.
			if ( 'publish' !== response.action ) {
				return false;
			}
			
			// Check to see if we have any new ids. 
			if ( 'undefined' != typeof response.data.new_ids ) {

				// If we have any new fields, update their models with the new id.
				if ( 'undefined' != typeof response.data.new_ids.fields ) {
					_.each( response.data.new_ids.fields, function( newID, oldID ) {
						var field = nfRadio.channel( 'fields' ).request( 'get:field', oldID );
						if ( field ) {
							field.set( 'id', newID );
						}
					} );
				}
			}

			// Mark our app as clean. This will disable the publish button and fire anything else that cares about the state.
			nfRadio.channel( 'app' ).request( 'update:setting', 'clean', true );
		}
		
	});

	return controller;
} );