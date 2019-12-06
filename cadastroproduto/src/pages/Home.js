import React from 'react';
import '../styles/Main.css';
import  camil from '../img/camil.png';
import  friboi from '../img/friboi.jpg';
import  garoto from '../img/garoto.jpg';
import  nestle from '../img/nestle.jpg';
import  outback from '../img/outback.jpg';

import {Link} from 'react-router-dom';

import Api from '../services/Api.js';

class Home extends React.Component {

    constructor (){ 
        super(); 
        this.state = {products: []};
    }

    getProduct = async () => { 
        var response = await Api.get("/products"); 
        console.log(response.data) 
        this.setState({products: response.data.products}); 
    }

    render () {
        return (
            <div className = "Home">
                <Link to = "/novo_produto">Cadastrar Produtos</Link>

                <button onClick = {this.getProduct} className = "lists">Ver Listas</button>

                {this.state.products.map((product, i) =>(
                    <div key = {i}>
                        {product.name} | {product.price} | {product.description}
                    </div>
                ))}

                {/* ----------------------------------------------------------------- */}

                <header id = "way">
                    <nav className = "bar">
                        <ul>
                            <li>
                                <a href>Empresa Parceiras</a>
                            </li>

                            <li>
                                <a href>Produtos</a>
                            </li>

                            <li>
                                <a href>Galeria</a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section id = "foods">
                    <div className = "photos">

                    <img src={friboi} alt="friboi" />
                    <img src={garoto} alt="garoto" />
                    <img src={nestle} alt="nestle" />
                    <img src={outback} alt="outback" />
                    <img src={camil} alt="camil" />
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;
