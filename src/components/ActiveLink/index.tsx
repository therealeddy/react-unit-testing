import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

interface ActiveLinkProps extends LinkProps {
  activeClassName: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({children, activeClassName, ...rest }) => {
  const { pathname } = useLocation();

  const className = pathname === rest.to ? activeClassName : '';

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
}

export default ActiveLink;
