import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

function Alertcomponent() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false); // Nascondi l'alert dopo 4 secondi
    }, 13000);

    // Funzione di clean-up per cancellare il timer se il componente viene smontato
    return () => clearTimeout(timer);
  }, []); // Il timer è impostato solo al montaggio del componente

  return (
    <>
      {showAlert && (
        <Alert variant="danger">
          La mia padronanza delle "Fetch" e delle "API" è ancora molto
          superficiale e debole, come dimostratosi nell'ultimo compito di js
          dove ho ancora "0"! Sto cercando di ripassare quotidianamente tutti i
          video inerenti, a partire dal programma di js! Perdona la "schifezza"
          della pagina, ma è stato il massimo che sono riuscito a fare!
        </Alert>
      )}
    </>
  );
}

export default Alertcomponent;
