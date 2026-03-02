import { useState, useEffect } from 'react'

const arrayFilm = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {
  const [film, setFilm] = useState(arrayFilm);
  const [newFilm, setNewFilm] = useState({
    title: "",
    genre: ""
  });

  return (
    <>
      <section>
        <h1>
          Lista Film
        </h1>
        <ul>
          {arrayFilm.map((singleFilm, index) =>
            <li key={index}>
              {singleFilm.title} {singleFilm.genre}

            </li>
          )}
        </ul>
      </section>

    </>
  )
}

export default App
