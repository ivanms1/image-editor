import React from 'react';
import ReactCrop from 'react-image-crop';

const Cropper = ({preview, handleCrop, crop}) => (
	<div className="cropper">
		<ReactCrop
		src={preview}
		onChange={handleCrop}
		maxWidth={50}
		maxHeight={50}
		crop={crop}/>
	</div>
);

export default Cropper