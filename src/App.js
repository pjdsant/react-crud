import React, { Component, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';
import './App.css';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Linho',
        livro: 'Funy',
        preco: '999'
      }
    ],
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores:[...this.state.autores, autor]})
  }
  
  removerAutor = index => {

    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        console.log(index, posAtual);
        return posAtual !== index;
      }),
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
        <Tabela autores={this.state.autores} removerAutor={this.removerAutor} />
        <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }

}

export default App;
