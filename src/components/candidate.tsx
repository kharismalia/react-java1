import { useState } from "react";

interface Candidate{
    id:number;
    foto:string;
    nama:string;
    no_urut:number;
    angkatan:number;
}

export default function Candidate({ no_urut, foto, nama, angkatan }) {
    const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
    return (
    <div className="candidate-card">
      <div className="candidate-number">{no_urut}</div>
      <img src={foto} alt={nama} />
      <section>
        <h2>{nama}</h2>
        <h5 onClick={handleShowDetails} style={{ cursor: 'pointer', color: '#fff' }}>
          Selengkapnya
        </h5>
        {showDetails && <p>PUB Angkatan: {angkatan}</p>}
      </section>
    </div>
    );
  }