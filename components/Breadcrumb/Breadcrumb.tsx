import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setBreadcrumbHeight } from "../../redux/BasicSlice";

const Breadcrumb = ({
  items,
  className,
}: {
  items: any;
  className?: string;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  useEffect(() => {
    dispatch(setBreadcrumbHeight(wrapperRef?.current?.offsetHeight));
  });

  return (
    <>
      {items && (
        <div
          className={`border border-black-light border-r-0 border-l-0 border-b-0 ${
            className && className.includes("bg-") ? "" : "bg-gray"
          } ${className ? className : ""}`}
          ref={wrapperRef}
        >
          <div className="container m-auto flex py-3">
            {items?.map((item: any, i: number) => (
              <div className="flex" key={i}>
                <Link href={item?.href} key={i}>
                  <p
                    className={`${
                      router.pathname == item.href
                        ? "text-primary"
                        : "text-black"
                    } cursor-pointer`}
                  >
                    {item?.title}
                  </p>
                </Link>
                {i + 1 !== items.length && <span className="mx-2">/</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Breadcrumb;
