import React, { useEffect } from "react";
import { Button, Input } from "../index";

const Singing = ({
  onSingUp,
  setFormTitle,
}: {
  onSingUp: any;
  setFormTitle: any;
}) => {
  useEffect(() => {
    setFormTitle("Login");
  }, [setFormTitle]);

  return (
    <>
      <div className="w-full mb-2">
        <Input type="text" name="email" label="Email Address" />
        <Input type="password" name="password" label="Password" />

        <Button className="w-full mt-4" type="button">
          Login
        </Button>
      </div>
    </>
  );
};

export default Singing;
