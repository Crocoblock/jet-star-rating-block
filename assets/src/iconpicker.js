import Star from './star';

const Iconpicker = function( props ) {

	const options = [
		'type-1',
		'type-2',
		'type-3',
		'type-4',
		'type-5',
		'type-6',
		'type-7',
		'type-8',
	];

	return <div
		className="jet-star-rating-picker"
	>
		<div className="components-base-control components-range-control">
			<div className="components-base-control__field">
				<label className="components-base-control__label">{ props.label }</label>
				<div className="jet-star-rating-picker__root">
					{ options.map( ( type ) => {

						var classList = [ 'jet-star-rating-picker__item' ];

						if ( props.value === type ) {
							classList.push( 'jet-star-rating-picker__item--selected' );
						}

						return <div 
							className={ classList.join( ' ' ) }
							onClick={ () => {
								props.onChange( type );
							} }
						>
							<Star
								variant="empty"
								type={ type }
								size="36"
							/>
						</div>
					} ) }
				</div>
			</div>
		</div>
	</div>
}

export default Iconpicker;
