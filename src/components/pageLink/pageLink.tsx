import React from "react";
import { Link, LinkProps, useLocation, useResolvedPath } from "react-router-dom";

// Drop-in for react-router's Link. Moving to a different page (home ↔ case
// study) runs a View Transition; jumping to a #section on the same page
// doesn't. Browsers without the API simply navigate as before.
const PageLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { pathname } = useLocation();
  const target = useResolvedPath(props.to);
  return <Link ref={ref} {...props} unstable_viewTransition={target.pathname !== pathname} />;
});

export default PageLink;
