import { createBrowserRouter } from "react-router-dom";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          path: "team",
          element: <Team />,
          loader: teamLoader,
        },
      ],
    },
  ]);

export default Routes;