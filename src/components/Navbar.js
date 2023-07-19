import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="Math-title">Math Magicians</h1>
      <ul>
        <CusomeLink to="/">Home</CusomeLink>
        <CusomeLink to="/calculator">Calculator</CusomeLink>
        <CusomeLink to="/quotes">Quotes</CusomeLink>
      </ul>
    </nav>
  );
}

function CusomeLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
