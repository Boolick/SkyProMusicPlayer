import { useState, useEffect } from "react";
import Main from "./Main";
import { Track } from "../components/Request/Request";

interface LoadingPageProps {
  tracks: Track[];
}

const LoadingPage: React.FC<LoadingPageProps> = ({ tracks }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        // отображение скелетонов
        <div>
          <input></input>
          <button>Button</button>
        </div>
      ) : (
        // отображение главной страницы
        <Main tracks={tracks} />
      )}
    </>
  );
};
export default LoadingPage;
