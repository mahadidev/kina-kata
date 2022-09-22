import React, { useState, useEffect } from "react";
import { FetchData } from "../pages/api";
import { Rating } from "react-simple-star-rating";
import { Button, Qty, Slider } from "./index";
import { ImageUrl } from "../utils";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch } from "react-redux";
import { cartProductAdd, cartProductRemove } from "../redux/CartSlice";

const Test = ({ title }) => {
  const [products, setProducts] = useState(null);
  const [qtyCount, setQtyCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [imagesArray, setImageArray] = useState([]);

  const onChangeQty = (count: number) => {
    setQtyCount(count);
    setPrice(Number(products.price * count));
  };

  const getData = (data: any) => {
    setProducts(data[0]);
    setPrice(data[0].price);

    setImageArray([]);
    data[0].image?.map((items: any, i: number) => {
      setImageArray((oldArray) => [
        ...oldArray,
        { original: ImageUrl(items).url(), thumbnail: ImageUrl(items).url() },
      ]);
    });
  };

  useEffect(() => {
    // fetch data
    if (title) {
      FetchData({
        name: "product",
        countStart: 0,
        countEnd: 12,
        order: "desc",
        orderBy: "sold",
        customQuery: `name match '${title}'`,
        callBack: getData,
      });
    }
  }, [title]);

  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(cartProductAdd(products));
  };

  return (
    <>
      {products && (
        <div className="container grid grid-cols-6 gap-10 py-10 min-h-full items-center">
          <div className="col-span-2">
            <ImageGallery
              items={imagesArray}
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
          <div className="justify-center col-span-4 grid grid-cols-2 gap-10">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary">Electric Gadget</p>
                  <h1 className="text-3xl text-black">{products?.name}</h1>
                </div>
                <p className="text-primary text-2xl">${products?.price}</p>
              </div>
              <Rating
                className="text-sm mt-2"
                initialValue={products?.rating}
                ratingValue={0}
                readonly
                size={28}
              />
              <hr className="my-4" />
              <p className="mt-2">{products?.detail}</p>
              <hr className="my-4" />
              <h2 className="text-black mb-2">Qty:</h2>
              <Qty onChange={onChangeQty} maxQty={products?.qty} minQty={0} />
              <Button className="mt-4" type="primary" onClick={addCart}>
                Add to Cart
              </Button>
            </div>

            <div className="bg-white shadow-sm rounded p-4 h-full">
              <h2 className="text-md text-center mb-2">Calculator</h2>
              <hr className="py-2 mt-4" />
              <div className="flex justify-between mb-2">
                <span>Qty: </span> <span>{qtyCount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Price: </span> <span>${products?.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount: </span> <span>0</span>
              </div>
              <hr className="py-2 mt-4" />
              <div className="flex justify-between">
                <span>Total Price: </span> <span>${price}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
