import { Image, TextStyles, Topbar } from "@cedcommerce/ounce-ui";
import React from "react";

const Navbar = () => {
  return (
    <div className="cutsom--topbar">
      <Topbar
        connectLeft={
          <Image
            src="https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg"
            alt=""
          />
        }
        connectRight={<TextStyles content="Testing right" />}
      />
    </div>
  );
};

export default Navbar;
