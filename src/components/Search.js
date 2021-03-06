import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Image, Col, FormGroup, InputGroup, FormControl, Button, Table, Footer, Container } from 'react-bootstrap';
import Select from 'react-select';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import '../css/style.css';
import { ENGINE_METHOD_DIGESTS, EAFNOSUPPORT } from "constants";
import { runInThisContext } from "vm";

const API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

export class Search extends React.Component {

    constructor(props) {
        super(props);

        /**
         * Инициализиурем стейт компонента.
         */
        this.state = {
            adult: null,               // Начальное состояние для фильтра 'Adult'. Ранее был format
            genre: null,                // Начальное состояние для фильтра 'Жанр'.
            year: null,                 // Начальное состояние для фильтра 'Год'.
            searchInput: null,          // Начальное состояние для фильтра 'Поиск по названию фильму'.
            result: null,
            redirect: false,
            selectedMovieId: null,
            genres: {}
        }

        /**
         * Делаем привязку контекста для обработчиков событий.
         * "Зашиваем" в методы ссылку на текущий объект, чтобы в теле метода this ссылался на объект.
         */
        this.handleAdultChange = this.handleAdultChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleSearchInputKeyPress = this.handleSearchInputKeyPress.bind(this);
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ru-RU`)
            // В then передаём функцию, которую необходимо выполнить после того, как сервер вернёт ответ.    
            .then((response) => {
                this.setState({
                    genres: response.data.genres
                });
            })
            .catch((error) => {
                console.log('Что-то пошло не так, а именно ' + error.message);
            });
    }

    /**
     * Обработчик изменения значения в фильтре 'Формат'.
     */
    handleAdultChange(selectedOption) {
        // Фильтруем по критерию "Вкл. фильмы для взрослых".

        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=popularity.desc&include_adult=${selectedOption.value}`;

        if (this.state.genre !== null) url += `&with_genres=${this.state.genre.value}`;
        if (this.state.searchInput !== null) url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${this.state.searchInput}&include_adult=${selectedOption.value}`;
        if (this.state.year !== null) url += `&primary_release_year=${this.state.year.value}`;

        axios.get(url)
            // В then передаём функцию, которую необходимо выполнить после того, как сервер вернёт ответ.    
            .then((response) => {
                this.setState({
                    adult: selectedOption,
                    result: response.data.results
                });
            })
            .catch((error) => {
                console.log('Что-то пошло не так, а именно ' + error.message);
            });
    }

    /**
     * Обработчик изменения значения в фильтре 'Жанр'.
     */
    handleGenreChange(selectedOption) {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=popularity.desc&page=1&with_genres=${selectedOption.value}`;

        if (this.state.year !== null) url += `&primary_release_year=${this.state.year.value}`;
        if (this.state.adult !== null) url += `&include_adult=${this.state.adult.value}`;

        console.log(url);
        axios.get(url)
            // В then передаём функцию, которую необходимо выполнить после того, как сервер вернёт ответ.    
            .then((response) => {
                this.setState({
                    genre: selectedOption,
                    result: response.data.results
                });
            })
            .catch((error) => {
                console.log('Что-то пошло не так, а именно ' + error.message);
            });
    }

    /**
     * Обработчик изменения значения в фильтре 'Год'.
     */
    handleYearChange(selectedOption) {

        // Фильтруем по году.

        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=popularity.desc&page=1&primary_release_year=${selectedOption.value}`;

        if (this.state.genre !== null) url += `&with_genres=${this.state.genre.value}`;
        if (this.state.searchInput !== null) url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${this.state.searchInput}&primary_release_year=${selectedOption.value}`;
        if (this.state.adult !== null) url += `&include_adult=${this.state.adult.value}`;

        console.log(url);
        axios.get(url)
            // В then передаём функцию, которую необходимо выполнить после того, как сервер вернёт ответ.    
            .then((response) => {
                this.setState({
                    year: selectedOption,
                    result: response.data.results
                });
            })
            .catch((error) => {
                console.log('Что-то пошло не так, а именно ' + error.message);
            });
    }

    /**
     * Обработчик изменения значения в поле 'Название фильма для поиска'.
     */
    handleSearchInputChange(event) {
        this.setState({
            searchInput: event.target.value
        });
    }

    //нажатие клавиши Enter в input search
    handleSearchInputKeyPress(event) {
        if (event.charCode == 13) {
            this.handleSearchButtonClick();
        }
    }

    checkStateNull() {
        if (this.state.searchInput !== '' || this.state.adult || this.state.genre || this.state.year)
            return false;
        else
            return true;
    }

    /**
     * Обработчик нажатия на кнопку 'Поиск'.
     */
    handleSearchButtonClick() {
        // Для удобства выносим из стейта в отдельную переменную...
        // const searchInput = this.state.searchInput;

        // ...В ES6 появился специальный синтаксис: деструктуризация. Делаем тоже самое, что закоментированная строка выше.
        const { searchInput } = this.state;

        // Фильтруем справочник по условию вхождения введённого значения в название.
        // Обратите внимание, что перед сравнением мы преобразовываем оба значения к нижнему регистру.
        // Это делает поиск регистронезависимым.
        // Также обратите внимание, что если searchInput пустое, то мы кладём в стейт весь справочник (например, если юзер очистил поле и нажал 'Поиск').
        // Для этого используется тренарный оператор. В React он используется очень часто.

        if (this.checkStateNull()) {
            this.setState({
                result: null
            });
        } else {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=37662c76ffc19e5cd1b95f37d77155fc&language=ru-RU&query=${searchInput}`;

            // if (this.state.genre !== null) url += `&genre=${this.state.genre.value}`;
            if (this.state.year !== null) url += `&primary_release_year=${this.state.year.value}`;
            if (this.state.adult !== null) url += `&include_adult=${this.state.adult.value}`;

            axios.get(url)
                // В then передаём функцию, которую необходимо выполнить после того, как сервер вернёт ответ.    
                .then((response) => {
                    this.setState({
                        result: response.data.results
                    });
                })
                .catch((error) => {
                    console.log('Что-то пошло не так, а именно ' + error.message);
                });
        }
    }

    render() {
        const { genres } = this.state;

        if (this.state.redirect) {
            return <Redirect push targer="_blank" to={{
                pathname: "/movie",
                state: { id: this.state.selectedMovieId }
            }} />
        }

        function posterFormatter(cell, row) {
            return (
                <Image alt="img" src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + cell} id='poster' />
            );
        }

        function yearFormatter(cell, row) {
            return cell.substring(0, 4);
        }

        function genreFormatter(cell, row) {
            var genresOfMovies = '';
            for (let i = 0; i < genres.length; i++) {
                for (let j = 0; j < cell.length; j++) {
                    if (genres[i].id == cell[j]) {
                        genresOfMovies += ' ' + genres[i].name;
                    }
                }
            }
            return genresOfMovies;
        }

        const columns = [{
            dataField: 'poster_path',
            text: '',
            formatter: posterFormatter
        }, {
            dataField: 'title',
            text: 'Title'
        }, {
            dataField: 'format',
            text: 'Format'
        }, {
            dataField: 'genre_ids',
            text: 'Genre',
            formatter: genreFormatter
        }, {
            dataField: 'release_date',
            text: 'Year',
            formatter: yearFormatter
        }, {
            dataField: 'vote_average',
            text: 'Rating'
        }
        ];

        const rowEventsOnClick = {
            onClick: (e, row, rowIndex) => {
                this.setState({
                    redirect: true,
                    selectedMovieId: row.id
                });
            }
        }

        return (
            <div>
                {/* Основное содержимое. */}
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3}>
                            <Select
                                name="adult" //был format
                                value={this.state.adult}
                                onChange={this.handleAdultChange}
                                clearable={false}
                                placeholder="Include adult?"
                                options={[
                                    // { value: 'movie', label: 'Фильм' },
                                    // { value: 'tvseries', label: 'Сериал' },
                                    { value: 'true', label: 'Yes' },
                                    { value: 'false', label: 'No' },
                                ]}
                            />
                        </Col>
                        <Col xs={3}>
                            <Select
                                name="genre"
                                value={this.state.genre}
                                onChange={this.handleGenreChange}
                                clearable={false}
                                placeholder="Genre (не работает с input)"
                                options={[
                                    { value: 12, label: 'Приключения' },
                                    { value: 16, label: 'Мультфильм' },
                                    { value: 35, label: 'Комедия' },
                                    { value: 53, label: 'Триллер' },
                                    { value: 28, label: 'Боевик' },
                                    { value: 80, label: 'Криминал' },
                                    { value: 99, label: 'Документальный' },
                                    { value: 10751, label: 'Семейный' },
                                    { value: 14, label: 'Фэнтези' },
                                    { value: 36, label: 'История' },
                                    { value: 27, label: 'Ужасы' },
                                    { value: 10402, label: 'Музыка' },
                                    { value: 9648, label: 'Детектив' },
                                    { value: 10749, label: 'Мелодрама' },
                                    { value: 878, label: 'Фантастика' },
                                    { value: 10770, label: 'Телевизионный фильм' },
                                    { value: 10752, label: 'Военный' },
                                    { value: 37, label: 'Вестерн' },
                                    { value: 18, label: 'Драма' }
                                ]}
                            />
                        </Col>
                        <Col xs={3}>
                            <Select
                                name="year"
                                value={this.state.year}
                                onChange={this.handleYearChange}
                                clearable={false}
                                placeholder="Year"
                                options={[
                                    { value: '2010', label: '2010' },
                                    { value: '2011', label: '2011' },
                                    { value: '2012', label: '2012' },
                                    { value: '2013', label: '2013' },
                                    { value: '2014', label: '2014' },
                                    { value: '2015', label: '2015' },
                                    { value: '2016', label: '2016' },
                                    { value: '2017', label: '2017' },
                                    { value: '2018', label: '2018' },
                                ]}
                            />
                        </Col>
                        <Col xs={3}>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text" onChange={this.handleSearchInputChange} placeholder="Search movie..." onKeyPress={this.handleSearchInputKeyPress} />
                                    <InputGroup.Button>
                                        <Button onClick={this.handleSearchButtonClick}>Search</Button>
                                    </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.result === null || this.state.result.length === 0 ? (
                                this.state.result === null ? <h4 className='message'>Введите критерии поиска</h4> : <h4 className='message'>По вашему запросу ничего не найдено</h4>
                            ) : (
                                    <BootstrapTable
                                        keyField='id'
                                        data={this.state.result}
                                        columns={columns}
                                        pagination={paginationFactory()}
                                        striped
                                        hover
                                        condensed
                                        rowEvents={rowEventsOnClick}
                                    />
                                )}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}