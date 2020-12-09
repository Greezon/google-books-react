// GET https://www.googleapis.com/books/v1/volumes?q=quilting

import React, { Component } from "react"
import Input from "../components/Input"
import axios from "axios";
import Button from "../components/Button"


class PageOne extends  Component {
	state = {
		searchString : ""
	}

	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
		const { value } = event.target;
		this.setState({searchString: value});
	  };

	handleFormSubmit = event => {
		// When the form is submitted, prevent its default behavior, get recipes update the recipes state
		event.preventDefault();
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchString}`)
		  .then(res => {
			  console.log("ivs", res)
		  })
		  .catch(err => console.log(err));
	  }; 


	render(){
		return(
			<div>
				<Input
                      name="searchString"
                      value={this.state.searchString}
                      onChange={this.handleInputChange}
                      placeholder="Search For a Recipe"
                    />
				<Button
                      onClick={this.handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                </Button>	
			</div>
		)
	}
}

export default PageOne