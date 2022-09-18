import ImageUrlBuilder from "@sanity/image-url";
import { Client } from "./index";

const builder = ImageUrlBuilder(Client);
const ImageUrl = (source: any) => builder.image(source);

export default ImageUrl;
