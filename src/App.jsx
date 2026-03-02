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
    title: '',
    genre: ''
  })

  const [filteredFilm, setFilteredFilm] = useState(film);
  const [genreFilter, setGenreFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('')

  useEffect(() => {
    const filterGenre = film.filter((singleFilm) => singleFilm.genre.includes(genreFilter))
    setFilteredFilm(filterGenre)
  }, [genreFilter]);

  useEffect(() => {
    setFilteredFilm(film.filter((singleFilm) => singleFilm.title.toLowerCase().includes(titleFilter.toLowerCase())))
  }, [titleFilter])

  const handleSubmit = (e) => {
    setNewFilm({
      ...newFilm, [e.target.name]: e.target.value,
    });
  }

  const addFilm = (e) => {
    e.preventDefault();
    setFilm([...film, newFilm])
    setFilteredFilm([...filteredFilm, newFilm])
    setNewFilm({
      title: '',
      genre: ''
    })
  }

  return (
    <>
      <section>
        <p>Filtra per titolo</p>
        <input type="text" onChange={(e) => setTitleFilter(e.target.value)} />
        <select onChange={(e) => setGenreFilter(e.target.value)} >
          <option value={''}>Selezione il genere</option>
          {film.map((singleFilm, index) => {
            return (
              <option key={index} value={singleFilm.genre}> {singleFilm.genre} </option>
            )
          })}
        </select>
      </section>

      <section>
        <h1>
          Lista Film
        </h1>
        <ul>
          {filteredFilm.map((singleFilm, index) =>
            <li key={index}>
              {singleFilm.title} {singleFilm.genre}
            </li>
          )}
        </ul>
      </section>

      <section>
        <form onSubmit={addFilm}>
          <label htmlFor="title"> Titolo </label>
          <input
            name='title'
            type='text'
            value={newFilm.title}
            onChange={handleSubmit}
          />
          <label htmlFor='genere'> Genere </label>
          <input
            name='genre'
            type='text'
            value={newFilm.genre}
            onChange={handleSubmit}
          />
          <button type='submit'>
            Invia
          </button>
        </form>
      </section>
    </>
  )
}

export default App