import Card from "./components/candidate"

const pemilu = [
  {
    id:1,
    nama:"Kharisma Amalia",
    foto:"/ama1.jpg",
    no_urut:1,
    angkatan:23,

  },
  {
    id:2,
    nama:"Rania f",
    foto:"/ama2.jpg",
    no_urut:4,
    angkatan:22,
  }
]

function App() {
 
  return (
    <div className="card">
      <h1>Pemilihan Ketua PUB</h1>
      <div className="candidates-container">
        {pemilu.map(candidate => (
          <Card 
            key={candidate.id}
            no_urut={candidate.no_urut}
            foto={candidate.foto}
            nama={candidate.nama}
            angkatan={candidate.angkatan}
          />
        ))}
      </div>
    </div>
      )
}

export default App
