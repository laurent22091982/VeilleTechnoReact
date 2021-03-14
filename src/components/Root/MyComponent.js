import React, { Component } from 'react';
import Calcul from './Addition';

class MyComponent extends Component {
    
    state = {
        chiffre1: '',
        chiffre2:'',
        typeCalcul:'',
    }

    
    handleChiffre1 = (e) => {
        this.setState({
            chiffre1: e.target.value
        })
    } 
    handleChiffre2 = (e) => {
        this.setState({
            chiffre2: e.target.value
        })
    } 
    
    handleTypeCalculAdd = (e) => {
        this.setState({
            typeCalcul: "Addition"
        })
    } 
    handleTypeCalculMult= (e) => {
        this.setState({
            typeCalcul: "Multiplication"
        })
    } 

    render(){
        return (
            <div>
                <form>
                    <label>Entrez le 1er chiffre: </label>
                    <input type="text" value={ this.state.chiffre1 }  onChange={ this.handleChiffre1 } />
                    <label>Entrez le 2e chiffre: </label>
                    <input type="text" value={ this.state.chiffre2 }  onChange={ this.handleChiffre2 } />
                    <br/>
                    <input type="radio" value="Multiplication" name={ this.state.typeCalcul }  onChange={ this.handleTypeCalculAdd } /> Addition
                    <input type="radio" value="Multiplication" name={ this.state.typeCalcul }  onChange={ this.handleTypeCalculMult } /> Multiplication                
                </form>
                <Calcul chiffre1={this.state.chiffre1} chiffre2={this.state.chiffre2} typeCalcul={this.state.typeCalcul}></Calcul>
            </div>
        )
    }
}

export default MyComponent;