import { Client } from './index';

const UploadImage = ({ image, onUpload }: { image: any; onUpload: any }) => {
	Client.assets
		.upload('image', image, {
			contentType: image.type,
			filename: image.name,
		})
		.then((document) => {
			onUpload(document);
		})
		.catch((error) => {
			console.log('Upload failed:', error.message);
		});
};

export default UploadImage;
