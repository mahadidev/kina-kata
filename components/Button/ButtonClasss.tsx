export const WrapperPropery = ({
  type,
  wrapperClass,
  ref,
}: {
  type: string;
  wrapperClass: string;
  ref?: any;
}) => {
  const ButtonType = {
    primary: `bg-gradient-to-r from-primary to-primary/90 text-white`,
    secondary: `bg-gradient-to-r from-secondary to-secondary/90 text-white`,
    white: `bg-white text-black`,
    outline: "",
  };
  const checkBtnType =
    type in ButtonType ? ButtonType[type] : ButtonType.primary;

  const checkBtnWidth = `${
    wrapperClass?.includes("w-") ? "" : `w-[max-content]`
  }`;

  const checkBtnPosition = `${
    wrapperClass?.includes("absolute") ? "" : `relative`
  }`;

  const className = `flex items-center justify-center text-center ${checkBtnType} ${checkBtnWidth} ${checkBtnPosition} ${
    wrapperClass ? wrapperClass : ""
  } ${
    wrapperClass?.includes("circle")
      ? `rounded-full`
      : `${wrapperClass?.includes("rounded-") ? "" : "rounded"}`
  }`;

  return {
    className: className,
    style: {
      height: wrapperClass?.includes("circle")
        ? `${ref?.current?.offsetWidth}px`
        : `${wrapperClass?.includes("h-") ? "" : "max-content"}`,
    },
  };
};

export const ButtonPropery = ({
  btnClass,
  ref,
}: {
  btnClass: string;
  ref?: any;
}) => {
  const className = `${
    btnClass ? btnClass : ""
  } w-[100%] flex items-center justify-center ${
    btnClass?.includes("p-") ? "" : `px-4 py-2`
  } `;

  return {
    className: className,
  };
};
