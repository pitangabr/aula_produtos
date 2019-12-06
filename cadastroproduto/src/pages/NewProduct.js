import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Products.css';

import Api from '../services/Api.js';

class NewProduct extends React.Component {

    constructor (){
        super();
        this.state = {
            name: "",
            price: "",
            description: "",
            response: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        var response = await Api.post("/new_product", {name: this.state.name,
                                                       price: this.state.price,
                                                       description: this.state.description});           
        if(response.data.state === "ok") {
            this.setState({response: "Usuário criado com sucesso"})
            console.log (response.data);
        }else {
            this.setState({response: "Erro ao criar usuário"})
            console.log (response.data);
        }
    }

    render () {
        return (
            <div className = "NewProduct">

                <Link to = "/">Home</Link>
                <h1>Cadastre-se</h1>

                {this.state.response}
        
                <form onSubmit = {(event) => this.handleSubmit(event)}> 

                    <tr>
                        <td>   
                            <input id ="name" type ="text" placeholder ="nome" onChange = {event => this.setState({name: event.target.value})}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id ="price" type ="text" placeholder ="preço" onChange = {event => this.setState({price: event.target.value})}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id ="description" type ="text" placeholder ="descrição" onChange = {event => this.setState({description: event.target.value})}/>
                        </td>
                    </tr>

                    <div className = "btn">
                        <button className ="btnForm" type ="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewProduct;