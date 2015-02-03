<?php


function ninja_forms_register_tab_form_settings(){
	$all_forms_link = esc_url(remove_query_arg(array('form_id', 'tab')));
	$args = array(
		'name' => __( 'Settings', 'ninja-forms' ),
		'page' => 'ninja-forms',
		// 'display_function' => 'ninja_forms_display_form_settings',
		'save_function' => 'ninja_forms_save_form_settings',
		'tab_reload' => false,
		// 'title' => '<h2>Forms <a href="'.$all_forms_link.'" class="add-new-h2">'.__('View All Forms', 'ninja-forms').'</a></h2>',
	);
	ninja_forms_register_tab('form_settings', $args);
}

add_action( 'admin_init', 'ninja_forms_register_tab_form_settings', 11 );

function ninja_forms_display_form_settings($form_id, $data){
	if(isset($data['form_title'])){
		$form_title = $data['form_title'];
		$prompt_text = 'screen-reader-text';
	}else{
		$form_title = '';
		$prompt_text = '';
	}

	if(isset($data['show_title'])){
		$show_title = $data['show_title'];
	}else{
		$show_title = '';
	}
?>
	<div id="titlediv">
		<div id="titlewrap">
			<label class="<?php echo $prompt_text;?>" id="title-prompt-text" for="title"><?php _e( 'Enter form title here', 'ninja-forms' ); ?></label>
			<input type="text" name="form_title" size="30" value="<?php echo esc_attr($form_title); ?>" id="title" autocomplete="off">
		</div>
	</div>
<?php
}

function ninja_forms_register_form_settings_basic_metabox(){

	if( isset( $_REQUEST['form_id'] ) ){
		$form_id = absint( $_REQUEST['form_id'] );
		$form_row = ninja_forms_get_form_by_id( $form_id );
		$form_data = $form_row['data'];
	}else{
		$form_id = '';
		$form_row = '';
		$form_data = '';
	}

	$pages = get_pages();
	$pages_array = array();
	$append_array = array();
	array_push($pages_array, array('name' => __( '- None', 'ninja-forms' ), 'value' => ''));
	array_push($append_array, array('name' => __( '- None', 'ninja-forms' ), 'value' => ''));
	foreach ($pages as $pagg) {
		array_push($pages_array, array('name' => $pagg->post_title, 'value' => get_page_link($pagg->ID)));
		array_push($append_array, array('name' => $pagg->post_title, 'value' => $pagg->ID));
	}

	if( isset( $form_data['ajax'] ) ){
		$ajax = $form_data['ajax'];
	}else{
		$ajax = 0;
	}

	$args = apply_filters( 'ninja_forms_form_settings_basic', array(
		'page' => 'ninja-forms',
		'tab' => 'form_settings',
		'slug' => 'basic_settings',
		'title' => __( 'Basic Form Behavior Settings', 'ninja-forms' ),
		'state' => 'closed',
		'settings' => array(
			array(
				'name' => 'show_title',
				'type' => 'checkbox',
				'label' => __( 'Display Form Title', 'ninja-forms' ),
			),
			array(
				'name' => 'logged_in',
				'type' => 'checkbox',
				'desc' => '',
				'label' => __( 'Require user to be logged in to view form?', 'ninja-forms' ),
				'display_function' => '',
				'help' => '',
			),
			array(
				'name' => 'append_page',
				'type' => 'select',
				'desc' => '',
				'label' => __( 'Add form to this page', 'ninja-forms' ),
				'display_function' => '',
				'help' => '',
				'options' => $append_array,
			),
			array(
				'name' => 'ajax',
				'type' => 'checkbox',
				'desc' => '',
				'label' => __( 'Submit via AJAX (without page reload)?', 'ninja-forms' ),
				'display_function' => '',
				'help' => '',
			),
			array(
				'name' => 'clear_complete',
				'type' => 'checkbox',
				'desc' => '',
				'label' => __( 'Clear successfully completed form?', 'ninja-forms' ),
				'display_function' => '',
				'desc' => __( 'If this box is checked, Ninja Forms will clear the form values after it has been successfully submitted.', 'ninja-forms' ),
				'default_value' => 1,
			),
			array(
				'name' => 'hide_complete',
				'type' => 'checkbox',
				'desc' => '',
				'label' => __( 'Hide successfully completed form?', 'ninja-forms' ),
				'display_function' => '',
				'desc' => __( 'If this box is checked, Ninja Forms will hide the form after it has been successfully submitted.', 'ninja-forms' ),
				'default_value' => 1,
			),
			array(
				'name' => 'sub_limit_number',
				'type' => 'number',
				'desc' => '',
				'label' => __( 'Limit Submissions', 'ninja-forms' ),
				'display_function' => '',
				'desc' => __( 'Select the number of submissions that this form will accept. Leave empty for no limit.', 'ninja-forms' ),
				'default_value' => '',
				'tr_class' => '',
				'min' => 0,
			),
			array(
				'name' => 'sub_limit_msg',
				'type' => 'rte',
				'label' => __( 'Limit Reached Message', 'ninja-forms' ),
				'desc' => __( 'Please enter a message that you want displayed when this form has reached its submission limit and will not accept new submissions.', 'ninja-forms' ),
				'tr_class' => '',
			),
		),
	));
	ninja_forms_register_tab_metabox($args);
}

add_action( 'admin_init', 'ninja_forms_register_form_settings_basic_metabox' );

function ninja_forms_save_form_settings( $form_id, $data ){
	global $wpdb, $ninja_forms_admin_update_message;

	foreach ( $data as $key => $val ){
		Ninja_Forms()->form( $form_id )->update_setting( $key, $val );
	}

	$update_msg = __( 'Form Settings Saved', 'ninja-forms' );
	return $update_msg;
}
