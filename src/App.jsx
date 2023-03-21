import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const reponse = await fetch(url);
      const data = await reponse.json();
      setTours(data);
      // console.log(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>there is no more tours available</h2>
          <button
            type="button"
            className="btn"
            onClick={() => {
              fetchTours();
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h2> available tours </h2>
        <div className="title-underline"></div>
      </div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
