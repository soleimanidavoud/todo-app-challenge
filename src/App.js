import TodoContextProvider from "./app/context/TodoContext";
import AppbarLayout from "./app/layouts/AppbarLayout";
import Router from "./app/Router";

export default function App() {
  return (
    <TodoContextProvider>
      <AppbarLayout />
      <Router />
    </TodoContextProvider>
  );
}
