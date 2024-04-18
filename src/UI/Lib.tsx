import { Link } from 'react-router-dom';

// Define a function component for the header.
export const Lib = () => {
  return (
<header>
  <img src="/assets/logo.jpg" alt="Logo" />
  <Link to='/some-route'>Link Text</Link>
</header>
  );
}