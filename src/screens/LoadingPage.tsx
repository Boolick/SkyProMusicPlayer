import { useState, useEffect } from "react";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  /*   return (
    <>
      {isLoading ? (
        // отображение скелетонов
      ) : (
        // отображение главной страницы
      )}
    </>
  ); */
};
export default LoadingPage;
