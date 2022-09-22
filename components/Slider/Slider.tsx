import { useEffect } from "react";
import { ImageUrl } from "../../utils";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({ images }: { images: any }) => {
  const imagesArray = [];

  useEffect(() => {
    images?.map((items: any, i: number) => {
      imagesArray.push({
        original: ImageUrl(items).url(),
        thumbnail: ImageUrl(items).url(),
      });
    });
  }, [images]);

  return (
    <>
      <ImageGallery
        items={imagesArray}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </>
  );
};

export default Slider;
