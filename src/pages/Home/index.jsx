import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import { Container, ContainerItems } from './styles';
import Cards from '../../components/Cards';

function Home() {
    const [movies, setMovies] = useState()
    const [filteredMovies, setFilteredMovies] = useState()

    useEffect(() => {

        async function loadMovies() {
            const {
                data: { docs },
            } = await api.get('movie')
            setMovies(docs)
            setFilteredMovies(docs)
        }
        loadMovies()
    }, [])
    return (
        <Container>
            <Header movies={movies} setFilteredMovies={setFilteredMovies} />
            <ContainerItems>
                {filteredMovies && filteredMovies.map((movie) => (
                    <Cards movieData={movie} key={movie._id} />
                ))}
            </ContainerItems>
        </Container>
    )
}

export default Home;
