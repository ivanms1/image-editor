import React from 'react';
import Dropzone from 'react-dropzone';

const Uploader = ({preview, isUploaded, startCrop, reset, handleDrop, rejectedDrop}) => (
	<div className="uploader">
		<div className="preview">
			{
				preview !== '' ?
				<img src={preview} alt="preview"/>
				:
				<p>Your preview here</p>
			}
		</div>
			{
				isUploaded ?
				<div className="crop-ready">
	        		<p>Ready to crop?</p>
	        		<button onClick={startCrop}>Yes</button>
	        		<button onClick={reset}>Change Image</button>
        		</div>
        		:
        		<Dropzone multiple={false}
        				  accept="image/*"
        				  onDropAccepted={handleDrop}
        				  onDropRejected={rejectedDrop}
        				  maxSize={1000000}>
        			<p>Drop or select a file to upload <br/>Max Size 1MB</p>
        		</Dropzone>
			}        		
		</div>
);


export default Uploader;
