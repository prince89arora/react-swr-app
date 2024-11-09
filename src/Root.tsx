import { Header, Toolbar } from "grommet";
import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const Root: FC = () => {
  return (
    <>
      <header>
        <Header justify="between">
          <h1>Logo</h1>
          <Toolbar>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/pets">Pets</Link>
          </Toolbar>
        </Header>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Root;
