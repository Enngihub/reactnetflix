import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=b3987125&s=Lord%20Of%20The%20Rings")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.Search);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // PER LA FETCH MI HA AIUTATO CHAT GPT HO DIFFICOLTA` !!!!

  return (
    <div>
      <div className="container mt-3 bg-dark">
        <div className="row">
          {data.map((item) => (
            <div key={item.imdbID} className="col-xs-12 col-sm-6 col-md-2 mb-3">
              <div className="card h-100 p-0">
                <img
                  src={item.Poster}
                  className=" card-img p-0 h-100"
                  style={{
                    objectFit: "cover",
                    height: "100px",
                  }}
                />
                <h5 className="text-white text-center bg-dark">{item.Title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
