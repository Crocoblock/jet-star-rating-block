import Star from './star';

const StarRating = function( props ) {

	const {
		className,
		attributes
	} = props;

	const baseClass = 'jet-star-rating-block';
	const scale = attributes.scale || 5;
	const rating = attributes.rating || 0;
	const width = Math.round( 100 * 100 * ( rating / scale ) ) / 100;

	const renderStars = function( variant, color ) {
		return ( [ ...Array( scale ) ].map( ( x, i ) => {

			var spacing = attributes.space;

			if ( scale === i + 1 ) {
				spacing = 0;
			}

			return <Star
				variant={ variant }
				type={ attributes.type }
				size={ attributes.size }
				spacing={ spacing }
				color={ color }
			/>
		} ) );
	}

	return <div className={ [ className, baseClass ].join( ' ' ) }>
		<div className={ baseClass + '__wrap' }>
			<div
				className={ baseClass + '__scale' }
				style={ {
					clipPath: 'inset(0 0 0 ' + width + '%)'
				} }
			>
			{ renderStars( 'empty', attributes.scaleColor ) }
			</div>
			<div
				className={ baseClass + '__rating' }
				style={ {
					clipPath: 'inset(0 calc(100% - ' + width + '%) 0 0)'
				} }
			>
			{ renderStars( 'fill', attributes.color ) }
			</div>
		</div>
	</div>
}

export default StarRating;