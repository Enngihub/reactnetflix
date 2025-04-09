import React, { useState, useEffect } from "react";

const TvShow = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d19464a9")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Risposta API:", data);
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="container mt-3 bg-dark">
        {loading && <p className="text-white text-center">Loading...</p>}
        {error && <p className="text-white text-center">Error: {error}</p>}

        {data ? (
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-2 mb-3">
              <div className="card h-100 p-0">
                <img
                  src={data.Poster}
                  className="card-img p-0 h-100"
                  style={{
                    objectFit: "cover",
                    height: "100px",
                  }}
                  alt={data.Title}
                />
                <h5 className="text-white text-center bg-dark">{data.Title}</h5>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white text-center">No data found</p>
        )}
      </div>
    </div>
  );
};

export default TvShow;
