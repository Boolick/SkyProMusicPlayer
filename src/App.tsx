import "./css/style.css";
import AppRoutes from "./routes";
import { Track } from "./components/Request/Request";
import Main from "./screens/Main";

interface AppProps {
  tracks: Track[];
}

const App = ({ tracks }: AppProps) => {

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
