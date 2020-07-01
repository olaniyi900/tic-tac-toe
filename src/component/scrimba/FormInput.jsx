import React, { Component } from  'react'

class FormInput extends  Component{

    state = {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        locations: 'nigeria',
        isVeg: false,
        isLac:false,
        
    }

    onChangeHandle = (event) => {
        const { name, value, type, checked } = event.target;
        type === 'checkbox'?
        this.setState({
            [ name ]: checked
        }):
        
        this.setState({
            [ name ]: value
        })

    }

    handleSubmit = () => {
        alert(
        `First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Age: ${this.state.age}
        Gender: ${this.state.gender}
        Location: ${this.state.locations}
        food: ${this.state.isLac}, ${this.state.isVeg}
        `
        )
    }

    render() {

        return (
            
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <label htmlFor="">First Name</label>
                    <input 
                    type="text" 
                    name="firstName" 
                    onChange={ this.onChangeHandle } 
                    value={this.state.firstName} 
                    />
                </div>

                <div>
                    <label htmlFor="">Lastst Name</label>
                    <input 
                    type="text" 
                    name="lastName" 
                    onChange={ this.onChangeHandle } 
                    value={this.state.lastName} 
                    />
                </div>

                <div>
                    <label htmlFor="">Age</label>
                    <input 
                    type="text" 
                    name="age" 
                    onChange={ this.onChangeHandle } 
                    value={this.state.age} 
                    />
                </div>

                <div>
                    <label htmlFor="">
                    <input 
                    type="radio" 
                    name="gender" 
                    checked={ this.state.gender === 'female' }
                    onChange={ this.onChangeHandle } 
                    value="female"
                    />
                    Female</label>
                </div>

                <div>
                    <label htmlFor="">
                    <input 
                    type="radio" 
                    name="gender" 
                    checked={ this.state.gender === 'male' }
                    onChange={ this.onChangeHandle } 
                    value="male"
                    />
                    Male</label>
                </div>

                <div>
                    <label htmlFor="">
                    <input 
                    type="radio" 
                    name="gender" 
                    checked={ this.state.gender === 'x' }
                    onChange={ this.onChangeHandle } 
                    value="x"
                    />
                    X</label>
                </div>

                <div>
                    <select 
                    name="locations" 
                    value={this.state.locations}
                    onChange={ this.onChangeHandle }
                    >
                        <option value="france">France</option>
                        <option value="italy">Italy</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="england">England</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">
                    <input 
                    type="checkbox" 
                    name="isLac" 
                    checked={ this.state.isLac }
                    onChange={ this.onChangeHandle } 
                    
                    />
                    Lactose</label>
                </div>

                <div>
                    <label htmlFor="">
                    <input 
                    type="checkbox" 
                    name="isVeg" 
                    checked={ this.state.isVeg }
                    onChange={ this.onChangeHandle } 
                    
                    />
                    Vegetarian</label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
    
}

export default FormInput;
