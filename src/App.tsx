import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "./components/Loaded";
import { useRoleContext } from "./context/rootContext";

// file css
import "./resource/css/base.css";
import { getRoutes } from "./routes";

function App() {
  const { role } = useRoleContext();
  const routes = getRoutes(role);
  const router = useRoutes(routes);
  return <Suspense fallback={<Loader text="page" />}>{router}</Suspense>;
}

export default App;
