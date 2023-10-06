import { Link } from 'react-router-dom';

// Define a function component for the header.
export const Lib = () => {
  return (
    <header>
      <Link to="/">
        <img src="/assets/logo.jpg" alt="Logo" />
      </Link>
      <Link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'/>
    </header>
  );
}