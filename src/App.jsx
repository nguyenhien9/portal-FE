import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
function App() {
  return (
    <Routes>
      {routes.map((route, i) => {
        return (
          <Route key={i} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute, index) => (
                <Route
                  key={index}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
          </Route>
        );
      })}
    </Routes>
  );
}

export default App;
