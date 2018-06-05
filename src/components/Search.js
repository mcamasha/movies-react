import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Image, Col, FormGroup, InputGroup, FormControl, Button, Table, Footer, Container } from 'react-bootstrap';
import Select from 'react-select';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { MOVIES } from '../movies.js';
import { GENRES } from '../genres.js';

import '../css/style.css';
import { ENGINE_METHOD_DIGESTS } from "constants";
import { runInThisContext } from "vm";

export class Search extends React.Component {

    constructor(props) {
        super(props);

        /**
         * Инициализиурем стейт компонента.
         */
        this.state = {
            format: null,               // Начальное состояние для фильтра 'Формат'.
            genre: null,                // Начальное состояние для фильтра 'Жанр'.
            year: null,                 // Начальное состояние для фильтра 'Год'.
            searchInput: null,          // Начальное состояние для фильтра 'Поиск по названию фильму'.
            result: null,
            pageSearch: true            // хз
        }

        /**
         * Делаем привязку контекста для обработчиков событий.
         * "Зашиваем" в методы ссылку на текущий объект, чтобы в теле метода this ссылался на объект.
         */
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleSearchInputKeyPress = this.handleSearchInputKeyPress.bind(this);
    }

    /**
     * Обработчик изменения значения в фильтре 'Формат'.
     */
    handleFormatChange(selectedOption) {
        // Фильтруем по формату.
        const movies = MOVIES.filter(
            (item) => {
                let itemResult = item.format.indexOf(selectedOption.value) !== -1;

                if (itemResult) {
                    if (this.state.genre !== null && item.genre_ids.indexOf(this.state.genre.value) === -1) return false;
                    if (this.state.year !== null && item.release_date.indexOf(this.state.year.value) === -1) return false;
                    if (this.state.searchInput !== null && item.title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) === -1) return false;
                }

                return itemResult;
            }
        );

        this.setState({
            format: selectedOption,
            result: movies
        });
    }

    /**
     * Обработчик изменения значения в фильтре 'Жанр'.
     */
    handleGenreChange(selectedOption) {
        // Фильтруем по жанрам. Не забываем при этом, что жанров может быть много, они лежат в массиве.
        // Это не сильно усложняет условие фильтрации, ведь indexOf метод прекрасно работает как со строкой так и с массивом.
        const movies = MOVIES.filter(
            (item) => {
                let itemResult = item.genre_ids.indexOf(selectedOption.value) !== -1;

                if (itemResult) {
                    if (this.state.format !== null && item.format.indexOf(this.state.format.value) === -1) return false;
                    if (this.state.year !== null && item.release_date.indexOf(this.state.year.value) === -1) return false;
                    if (this.state.searchInput !== null && item.title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) === -1) return false;
                }

                return itemResult;
            }
        );

        this.setState({
            genre: selectedOption,
            result: movies
        });
    }

    /**
     * Обработчик изменения значения в фильтре 'Год'.
     */
    handleYearChange(selectedOption) {

        // Фильтруем по году.
        const movies = MOVIES.filter(
            (item) => {
                let itemResult = item.release_date.indexOf(selectedOption.value) !== -1

                if (itemResult) {
                    if (this.state.format !== null && item.format.indexOf(this.state.format.value) === -1) return false;
                    if (this.state.genre !== null && item.genre_ids.indexOf(this.state.genre.value) === -1) return false;
                    if (this.state.searchInput !== null && item.title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) === -1) return false;
                }

                return itemResult;
            }
        );

        this.setState({
            year: selectedOption,
            result: movies
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
        if(this.state.searchInput !== '' || this.state.format || this.state.genre || this.state.year) 
            return false;
        else 
            return true;
    }

    // checkResultNull() {
    //     if(this.state.result === null) {
    //         console.log('По вашему запросу ничего не найдено.');
    //     }
    // }

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

        if(this.checkStateNull()) {
            this.setState({
                result: null
            });
        } else {
            const movies = MOVIES.filter(
                (item) => {
                    let itemResult = item.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;

                    if (itemResult) {
                        if (this.state.format !== null && item.format.indexOf(this.state.format.value) === -1) return false;
                        if (this.state.genre !== null && item.genre_ids.indexOf(this.state.genre.value) === -1) return false;
                        if (this.state.year !== null && item.release_date.indexOf(this.state.year.value) === -1) return false;
                    }

                    return itemResult;
                }
            );

            this.setState({
                result: movies
            });
        }
    }

    render() {
        function posterFormatter(cell, row) {
            return (
                <Image alt="img" src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + cell} id='poster' />
            );
        }

        function yearFormatter(cell, row) {
            return cell.substring(0, 4);
        }

        function genreFormatter(cell, row) {
            var genres = '';
            for (let i = 0; i < GENRES.length; i++) {
                for (let j = 0; j < cell.length; j++) {
                    if (GENRES[i].id == cell[j]) {
                        genres += ' ' + GENRES[i].name;
                    }
                }
            }
            return genres;
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

        return (
            <div>
                {/* Основное содержимое. */}
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3}>
                            <Select
                                name="format"
                                value={this.state.format}
                                onChange={this.handleFormatChange}
                                clearable={false}
                                options={[
                                    { value: 'movie', label: 'Фильм' },
                                    { value: 'tvseries', label: 'Сериал' },
                                ]}
                            />
                        </Col>
                        <Col xs={3}>
                            <Select
                                name="genre"
                                value={this.state.genre}
                                onChange={this.handleGenreChange}
                                clearable={false}
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
                                this.state.result === null ? <h4>Введите критерии поиска</h4> : <h4>По вашему запросу ничего не найдено</h4>
                            ) : (
                                    <BootstrapTable
                                        keyField='id'
                                        data={this.state.result}
                                        columns={columns}
                                        pagination={paginationFactory()}
                                        striped
                                        hover
                                        condensed
                                    />
                                )}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}