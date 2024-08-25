import { createBrowserRouter } from "react-router-dom";
import Container from "./components/Container/Container";
import GlobalLayout from "./layout/GlobalLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [{ index: true, element: <Container /> }],
  },
]);
