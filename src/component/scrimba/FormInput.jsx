import React, { Component } from 'react'

class FormInput extends Component {
    state = {
        firstName: '',
        lastName:'',
        email:'',
        isFriendly: false,
        message: '',
        gender: '',
        favouriteFood:'rice'
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === 'checkbox' ? 
        this.setState({
            [ name ]: checked
        }): this.setState({
            [ name ]: value
        });

    }

    render() {

    


    return (
        <div>
            <p>{ this.state.firstName } { this.state.lastName } { this.state.email }</p>
            <form >
                <div>
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={ this.handleChange } value={ this.state.firstName } name="firstName" id=""/>
                </div>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={ this.handleChange } value={ this.state.lastName } name="lastName" id=""/>
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" onChange={ this.handleChange } value={ this.state.email } name="email" id=""/>
                </div>

                <div>
                    <label htmlFor="">Message:</label>
                    <textarea  onChange={ this.handleChange } value={ this.state.message } name="message" id=""/>
                </div>

                <div>
                    <label htmlFor="">
                    <input type="checkbox" onChange={ this.handleChange } checked={ this.state.isFriendly } name="isFriendly" id=""/>
                    isFriendly</label>
                </div>

                <div>
                    <label htmlFor="">
                    <input type="radio" onChange={ this.handleChange } checked={this.state.gender === "male" } value="male" name="gender" id=""/>
                    male</label>
                </div>

                <div>
                    <label htmlFor="">
                    <input type="radio" onChange={ this.handleChange } checked={this.state.gender === "female" } value="female" name="gender" id=""/>
                    female</label>
                </div>

                <div>
                    <label htmlFor="">Favourite Food</label>
                    <select name="favouriteFood" onChange={ this.handleChange } value={this.state.favouriteFood}>
                        <option value="rice">Rice</option>
                        <option value="semovita">Semovita</option>
                        <option value="garri">garri</option>
                        <option value="salad">Salad</option>
                    </select>
                </div>
                <div>
        
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}
}

export default FormInput
