import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Image, Col } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// import '../css/home.css';
import '../css/style.css';
import { Search } from './Search.js';

const API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

export class Home extends React.Component {

    constructor(props) {
        super(props);

        /**
         * Инициализиурем стейт компонента.
         */
        this.state = {
            result: null,             // По умолчанию полжим сразу все фильмы. Их нужно будет показать в таблице.
            genres: null,
            isLoading: true,
            colomns: {},
            rowsEvents: {},
            redirect: false,
            selectedMovieId: null,
        }
    }

    componentDidMount() {
        //генерируем случайное число - страница с фильмами, которая будет выведена
        const page = Math.floor(Math.random() * 3) + 1;

        axios.all([
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ru-RU`),
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ru-RU&page=${page}&region=RU`)
        ])
            .then(axios.spread((genreRes, moviesRes) => {
                this.setState({
                    genres: genreRes.data.genres,
                    result: moviesRes.data.results
                });
                this.getColomns();
            })
            );
    }

    getColomns() {
        const { genres } = this.state;

        function posterFormatter(cell, row) {
            return (
                <Image alt="img" src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + cell} id='poster' />
            );
        }

        function yearFormatter(cell, row) {
            return cell.substring(0, 4);
        }

        function genreFormatter(cell, row) {
            let genresOfMovie = '';
            for (let i = 0; i < genres.length; i++) {
                for (let j = 0; j < cell.length; j++) {
                    if (genres[i].id == cell[j]) {
                        genresOfMovie += ' ' + genres[i].name;
                    }
                }
            }
            return genresOfMovie;
        }

        function voteFormatter(cell, row) {
            if (cell === 0)
                return 'нет';
            else
                return cell;
        }

        const columnsOfTable = [{
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
            text: 'Rating',
            formatter: voteFormatter
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

        this.setState({
            colomns: columnsOfTable,
            rowEvents: rowEventsOnClick,
            isLoading: false
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push targer="_blank" to={{ 
                pathname: "/movie",
                state: { id: this.state.selectedMovieId}
            }} />
        }
        return (
            <div>
                {/* Основное содержимое. */}
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h1>Главная страница</h1>
                            <h2>Сейчас в прокате:</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.isLoading ?
                                <h3 className='message'>Идёт загрузка, пожалуйста, подождите...</h3>
                                :
                                <BootstrapTable
                                    keyField='id'
                                    data={this.state.result}
                                    columns={this.state.colomns}
                                    pagination={paginationFactory()}
                                    striped
                                    hover
                                    condensed
                                    rowEvents={this.state.rowEvents}
                                />
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}