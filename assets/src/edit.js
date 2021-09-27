import Iconpicker from './iconpicker';
import BlockBody from './block-body';

const {
	InspectorControls,
	ColorPalette
} = wp.blockEditor;

const { __ } = wp.i18n;

const {
	RangeControl,
	TextControl,
	ToolbarGroup,
	PanelBody
} = wp.components;

const {
	RichText,
	BlockControls
} = wp.blockEditor;

const {
	Fragment
} = wp.element;

const Edit = function( props ) {

	const {
		className,
		attributes,
		setAttributes,
	} = props;

	const scale = attributes.scale || 5;

	return (
		<Fragment>
			<BlockControls
				key={ className + '-toolbar' }
			>
				<ToolbarGroup>
					<TextControl
						label={ __( 'Scale', 'jet-star-rating-block' ) }
						value={ attributes.scale }
						type="number"
						className="jet-star-rating-num"
						onChange={ ( value ) => {
							setAttributes( {
								scale: parseFloat( value )
							} );
						} }
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<TextControl
						label={ __( 'Rating', 'jet-star-rating-block' ) }
						value={ attributes.rating }
						type="number"
						className="jet-star-rating-num"
						onChange={ ( value ) => {

							value = parseFloat( value );

							if ( value > attributes.scale ) {
								value = attributes.scale;
							}

							setAttributes( {
								rating: value
							} );
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls
				key={ className + '-inspector' }
			>
				<PanelBody
					title={ __( 'General', 'jet-star-rating-block' ) }
				>
					<RangeControl
						label={ __( 'Scale', 'jet-star-rating-block' ) }
						help={ __( 'Maximum number of allowed stars', 'jet-star-rating-block' ) }
						min="1"
						max="20"
						value={ attributes.scale }
						onChange={ ( value ) => {
							props.setAttributes( {
								scale: value
							} )
						} }
					/>
					<RangeControl
						label={ __( 'Rating', 'jet-star-rating-block' ) }
						help={ __( 'Current rating value', 'jet-star-rating-block' ) }
						min="0"
						max={ scale }
						step="0.1"
						value={ attributes.rating }
						onChange={ ( value ) => {
							props.setAttributes( {
								rating: value
							} )
						} }
					/>
					<Iconpicker
						label={ __( 'Select Icon', 'jet-star-rating-block' ) }
						value={ attributes.type }
						onChange={ ( value ) => {
							props.setAttributes( {
								type: value
							} )
						} }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Style', 'jet-star-rating-block' ) }
				>
					<RangeControl
						label={ __( 'Icon size', 'jet-star-rating-block' ) }
						min="10"
						max="100"
						value={ attributes.size }
						onChange={ ( value ) => {
							props.setAttributes( {
								size: value
							} )
						} }
					/>
					<RangeControl
						label={ __( 'Space between icons', 'jet-star-rating-block' ) }
						min="0"
						max="30"
						value={ attributes.space }
						onChange={ ( value ) => {
							props.setAttributes( {
								space: value
							} )
						} }
					/>
					<p>
						<strong>{ __( 'Rating Color', 'jet-star-rating-block' ) }</strong>
					</p>
					<ColorPalette
						value={ attributes.color }
						onChange={ ( value ) => {
							props.setAttributes( {
								color: value
							} )
						} }
					/>
					<p>
						<strong>{ __( 'Scale Color', 'jet-star-rating-block' ) }</strong>
					</p>
					<ColorPalette
						value={ attributes.scaleColor }
						onChange={ ( value ) => {
							props.setAttributes( {
								scaleColor: value
							} )
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<BlockBody
				attributes={ attributes }
				className={ className }
			/>
		</Fragment>
	);
}

export default Edit;
