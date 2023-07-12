import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <div>
          <img src="/los-amigos-happy.png" alt="los amigos logo" />
          <h1>Restaurante Los Amigos</h1>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
