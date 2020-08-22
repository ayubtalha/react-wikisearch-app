import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Wiki Search
      </Link>

      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
