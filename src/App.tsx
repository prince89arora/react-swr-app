import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import About from "./About";
import { Grommet } from "grommet";
import PetsList from "./pets/pages/PetsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/pets", element: <PetsList /> },
    ],
  },
]);

function App() {
  return (
    <Grommet
      theme={{
        global: {},
      }}
    >
      <RouterProvider router={router} />
    </Grommet>
  );
}

export default App;
