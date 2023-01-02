import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FetchData } from "../../pages/api";

const Menu = ({ onRoute }: { onRoute: CallableFunction }) => {
  const [menus, setMenus] = useState(null);
  const router = useRouter();

  const setMenuData = (data: any) => {
    setMenus(data);
  };

  useEffect(() => {
    FetchData({
      query: `*[_type == "menus" && name == "navigationMenu"][0]`,
      callBack: setMenuData,
    });
  }, []);

  return (
    <div
      className={`w-full block sm:flex sm:justify-center border border-b-0 border-r-0 border-l-0 sm:border-0`}
    >
      {menus?.item?.map((item: any, i: number) => {
        return (
          <Link href={item.url} key={i}>
            <p
              className={`hover:bg-transparent-gray sm:hover:bg-transparent sm:hover:text-primary cursor-pointer px-4 py-3 sm:py-0 ${
                router.pathname == item.url
                  ? "bg-transparent-gray sm:bg-transparent sm:text-primary"
                  : "text-black-light"
              }`}
              onClick={() => {
                if (onRoute) {
                  onRoute();
                }
              }}
            >
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
