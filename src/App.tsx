import "./css/style.css";
import AppRoutes from "./routes";
import { Track } from "./components/Request/Request";
import Main from "./screens/Main";

const tracks: Track[] = [];

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <AppRoutes
          isAuthenticated={true}
          path={"/"}
          element={<Main tracks={tracks} />}
          tracks={tracks}
        />
      </div>
    </div>
  );
};

export default App;
