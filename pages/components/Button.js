import { useState } from "react";

function BotonContador() {
    const [contador, setContador] = useState(0);
  
    const handleClick = () => {
      setContador(contador + 1);
    };
  
    return (
      <button className="btn-counter" onClick={handleClick} value={contador}>
        Contador: {contador}
      </button>
    );
}

export default BotonContador;
