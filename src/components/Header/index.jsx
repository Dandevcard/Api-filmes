import { Container, Headerr } from "./styles";
import logo from "../../assets/logo.png";
import { useEffect, useRef, useState } from "react";

export default function Header({ movies, setFilteredMovies }) {
  const [aveValues, setAveValues] = useState({
    runtime: 0, 
    budget: 0,
});

  const inputRef = useRef();

  function aveMovies(movies) {

    const runtime = movies.reduce((acc, current) => current.runtimeInMinutes + acc, 0) / movies.length;

    const budget = movies.reduce((acc, current) => current.budgetInMillions + acc, 0) / movies.length;

    setAveValues({ runtime, budget });
  }

  useEffect(() => {
    if (movies && movies.length > 0) {
      aveMovies(movies)
    }
  }, [movies])

  function inputChange() {
    const newMovies = movies.filter((movies) =>
      movies.name.toLowerCase().includes(inputRef.current.value.toLowerCase())
    );

    setFilteredMovies(newMovies);
    aveMovies(newMovies);
  }
  return (
    <>
      <Headerr>
        <img src={logo} alt="logo" />
        <p>Senior Frontend Test</p>
      </Headerr>
      <Container>
        <h1>Lord of the Rings Movies</h1>
        <div className="ave-value">
          <div>
            <p>Av. movie runtime: {aveValues.runtime.toFixed(2)}Mins</p>
            <p>ave. movie budget: {aveValues.budget.toFixed(2)}R$ </p>
          </div>
          <div className="filter-movies">
            <input
              type="text"
              placeholder="Filter movies by name"
              ref={inputRef}
              onChange={inputChange}
            />
            <select name="options" id="options">
              <option value="all">Sort by budget</option>
              <option value="all">valor 01</option>
              <option value="all">valor 02</option>
            </select>
          </div>
        </div>
      </Container>
    </>
  );
}
