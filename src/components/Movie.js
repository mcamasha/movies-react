import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Image, Col, Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios';

import '../css/style.css';

const API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

export class Movie extends React.Component {

    constructor(props) {
        super(props);

        /**
         * Инициализиурем стейт компонента.
         */
        this.state = {
            data: null,
            isLoading: true,
            id: this.props.location.state.id
        }
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${API_KEY}&language=ru-RU`)
            // В then передаём функцию, которую необходимо выполнить после того, как сервер вернёт ответ.    
            .then((response) => {
                this.setState({
                    data: response.data,
                    isLoading: false
                });
            })
            .catch((error) => {
                console.log('Что-то пошло не так, а именно ' + error.message);
            });
    }

    render() {
        let genres = '';
        let companies = '';
        if(!this.state.isLoading) {
            this.state.data.genres.forEach(genre => {
                genres += genre.name + ' '
            })
            this.state.data.production_companies.forEach(company => {
                companies += company.name + ' '
            })
        }

        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h2>Информация о фильме</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.isLoading ?
                                <h3 className='message'>Идёт загрузка, пожалуйста, подождите...</h3>
                                :
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Criterion</th>
                                            <th>Definition</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Title</td>
                                            <td>{this.state.data.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Original title</td>
                                            <td>{this.state.data.original_title}</td>
                                        </tr>
                                        <tr>
                                            <td>Poster</td>
                                            <td><Image src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + this.state.data.poster_path} alt='poster' /></td>
                                        </tr>
                                        <tr>
                                            <td>Backdrop</td>
                                            <td><Image src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + this.state.data.backdrop_path} alt='poster' /></td>
                                        </tr>
                                        <tr>
                                            <td>Budget</td>
                                            <td>{this.state.data.budget !== 0 ? this.state.data.budget : 'Данных нет'}</td>                                            
                                        </tr>
                                        <tr>
                                            <td>Genres</td>
                                            <td>{genres !== '' ? genres : 'Данных нет'}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>{this.state.data.status}</td>
                                        </tr>
                                        <tr>
                                            <td>Adult</td>
                                            <td>{this.state.data.adult === true ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td>Popularity</td>
                                            <td>{this.state.data.popularity}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of release</td>
                                            <td>{this.state.data.release_date}</td>
                                        </tr>
                                        <tr>
                                            <td>Vote average</td>
                                            <td>{this.state.data.vote_average !== 0 ? this.state.data.vote_average : 'Данных нет'}</td>                                            
                                        </tr>
                                        <tr>
                                            <td>Vote count</td>
                                            <td>{this.state.data.vote_count !== 0 ? this.state.data.vote_count : 'Данных нет'}</td>
                                        </tr>
                                        <tr>
                                            <td>Companies</td>
                                            <td>{companies !== '' ? companies : 'Данных нет'}</td>
                                        </tr>
                                        <tr>
                                            <td>Original language</td>
                                            <td>{this.state.data.original_language}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}