import { Link, useLocation } from "react-router-dom";

function Breadcrumbs({ routes }) {
  const location = useLocation();
  const paths = routes.filter((r) => location.pathname.startsWith(r.path));
  return (
    <nav className="breadcrumb">
      {" "}
      {paths.map((r, i) => (
        <span key={i}>
          {" "}
          <Link to={r.path}>{r.name}</Link> {i < paths.length - 1 && " / "}{" "}
        </span>
      ))}{" "}
    </nav>
  );
}

export default Breadcrumbs;
