const { registerBlockType } = wp.blocks;

import Edit from './edit';
import Save from './save';

registerBlockType( 'jet-blocks/star-rating', {
	edit: Edit,
	save: Save,
} );