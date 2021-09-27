<?php
/**
 * Plugin Name:  Star Rating Block
 * Description:  The Star Rating block allows you to display static star ratings within your content. You can assign dynamic values by using JetEngine plugin.
 * Version:      1.0.0
 * Author:       Crocoblock
 * Author URI:   https://crocoblock.com
 * License:      GPL-2.0-or-later
 * License URI:  https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:  jet-star-rating-block
 */

/**
 * Get plugin config part by key
 *
 * @return string
 */
function jet_star_rating_block_config( $key = '', $suffix = '' ) {

	$config = array(
		'plugin_dir' => trailingslashit( dirname( __FILE__ ) ),
		'plugin_url' => plugins_url( '/', __FILE__ ),
		'slug'       => 'jet-star-rating-block',
		'version'    => '1.0.0',
		'block_name' => 'jet-blocks/star-rating',
		'deps'       => array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-block-editor', 'wp-i18n', 'wp-polyfill', 'lodash' ),
	);

	if ( isset( $config[ $key ] ) ) {

		if ( is_array( $config[ $key ] ) ) {
			return $config[ $key ];
		} else {
			return $config[ $key ] . $suffix;
		}

	} else {
		return false;
	}
}

/**
 * Register all block assets
 */
function jet_star_rating_block_init() {

	wp_register_script(
		jet_star_rating_block_config( 'slug', '-editor' ),
		jet_star_rating_block_config( 'plugin_url', 'assets/js/editor.js' ),
		jet_star_rating_block_config( 'deps' ),
		jet_star_rating_block_config( 'version' ),
		true
	);

	wp_set_script_translations(
		jet_star_rating_block_config( 'slug', '-editor' ),
		jet_star_rating_block_config( 'slug' )
	);

	wp_register_style(
		jet_star_rating_block_config( 'slug', '-editor' ),
		jet_star_rating_block_config( 'plugin_url', 'assets/css/editor-style.css' ),
		array(),
		jet_star_rating_block_config( 'version' )
	);

	wp_register_style(
		jet_star_rating_block_config( 'slug' ),
		jet_star_rating_block_config( 'plugin_url', 'assets/css/style.css' ),
		array(),
		jet_star_rating_block_config( 'version' )
	);

	register_block_type( __DIR__ );

}

add_action( 'init', 'jet_star_rating_block_init' );
