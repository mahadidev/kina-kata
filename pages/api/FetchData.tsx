import React from "react";
import axios from "axios";
import { ApiSubject } from "./index";

const FetchData = ({
  name,
  countStart,
  countEnd,
  order,
  orderBy,
  callBack,
}: {
  name: string;
  countStart?: number | boolean;
  countEnd?: number | boolean;
  order?: "asc" | "desc";
  orderBy?: string;
  callBack: CallableFunction;
}) => {
  // api url
  let url = process.env.NEXT_PUBLIC_BASE_URL + "/api/product/getProducts";

  // check params
  let params: any;

  if (name || countStart || countEnd || order || orderBy) {
    params = `?`;

    params = params + `${ApiSubject.table}=${name}&`;

    if (countStart || countStart === 0) {
      params = params + `${ApiSubject.countStart}=${countStart}&`;
    }
    if (countEnd) {
      params = params + `${ApiSubject.countEnd}=${countEnd}&`;
    }
    if (order) {
      params = params + `${ApiSubject.order}=${order}&`;
    }
    if (orderBy) {
      params = params + `${ApiSubject.orderBy}=${orderBy}&`;
    }
    url = url + params;
    axios
      .get(url)
      .then((response) => {
        if (callBack) {
          callBack(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default FetchData;
