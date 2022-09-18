import React, { useEffect } from "react";
import axios from "axios";

const index = () => {
  const getProdcut = () => {
    axios
      .get(`http://localhost:3000/api/product/getProducts`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProdcut();
  }, []);

  return <div>index</div>;
};

export default index;
