import BlockBody from './block-body';

const Save = ( props ) => {

	const {
		className,
		attributes
	} = props;

	return <BlockBody
		attributes={ attributes }
		className={ className }
	/>;
}

export default Save;
