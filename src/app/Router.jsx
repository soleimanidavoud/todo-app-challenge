import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loading from "./layouts/Loading";

const Home = lazy(() => import("./pages/Home"));
const Edit = lazy(() => import("./pages/Edit"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/edit/:id" exact>
        <Edit />
      </Route>
    </Suspense>
  );
}
