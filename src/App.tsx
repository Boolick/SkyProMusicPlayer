import "./css/style.css";
import AppRoutes from "./routes";
import Main from "./screens/Main";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <AppRoutes isAuthenticated={true} path={"/"} element={<Main />} />
        </div>
      </div>
    </>
  );
};

export default App;
