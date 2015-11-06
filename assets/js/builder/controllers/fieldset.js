define( ['builder/views/drawerFieldTypeSettingFieldset','builder/models/fieldTypeSettingCollection'], function( fieldsetView, fieldTypeSettingCollection ) {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			nfRadio.channel( 'fieldset' ).reply( 'get:settingChildView', this.getSettingChildView, this );
			// When a list type field is initialized, create an option collection.
			this.listenTo( nfRadio.channel( 'fields-fieldset' ), 'init:fieldTypeModel', this.createSettingsCollection );
			console.log( 'init fieldset' );
		},

		getSettingChildView: function( model ) {
			return fieldsetView;
		},

		/**
		 * Instantiate settings collection when a fieldset type is initialized.
		 * 
		 * @since  3.0
		 * @param  backbone.model 	model 	field model being initialized
		 * @return void
		 */
		createSettingsCollection: function( model ) {
			model.set( 'settings', new fieldTypeSettingCollection( model.get( 'settings' ) ) );
		},

	});

	return controller;
} );