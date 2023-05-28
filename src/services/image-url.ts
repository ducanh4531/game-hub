// because img is static asset and be deployed with application
// => need to import it as a module
import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
	// some games do not have image url
	if (!url) return noImage;

	const target = "media/";
	const index = url.indexOf(target) + target.length;

	return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
};

export default getCroppedImageUrl;
