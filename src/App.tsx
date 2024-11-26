import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import About from "./About";
import { Grommet } from "grommet";
import PetsList from "./pets/pages/PetsList";
import { SWRConfig } from "swr";
import { fetcher } from "./global/fetcher";

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

/**
 * The main application component.
 *
 * This component wraps the {@link RouterProvider} for the application with a
 * {@link Grommet} component to provide the global theme.
 *
 * @returns The main application component.
 */
function App() {
  return (
    <Grommet
      theme={{
        global: {},
      }}
    >
      <SWRConfig
        value={{
          fetcher: fetcher,
          shouldRetryOnError: false,
        }}
      >
        <RouterProvider router={router} />
      </SWRConfig>
    </Grommet>
  );
}

export default App;
