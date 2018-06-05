import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Image, Col } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios';

// import '../css/home.css';
import '../css/style.css';
import { MOVIES } from '../movies.js';
import { GENRES } from '../genres.js';

const API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

export class Home extends React.Component {

    constructor(props) {
        super(props);

        /**
         * Инициализиурем стейт компонента.
         */
        this.state = {
            result: null,             // По умолчанию полжим сразу все фильмы. Их нужно будет показать в таблице.
        }
    }

    componentDidMount() {
        //генерируем случайное число - страница с фильмами, которая будет выведена
        const page = Math.floor(Math.random() * 4);
        console.log(page);
        
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ru-RU&page=${page}&region=RU`)
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

        function voteFormatter(cell, row) {
            if(cell === 0)
                return 'нет';
            else
                return cell;
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
            text: 'Rating',
            formatter: voteFormatter
        }
        ];

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
                            <BootstrapTable
                                keyField='id'
                                data={this.state.result}
                                columns={columns}
                                pagination={paginationFactory()}
                                striped
                                hover
                                condensed
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}