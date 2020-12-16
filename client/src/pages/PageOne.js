// GET https://www.googleapis.com/books/v1/volumes?q=quilting

import React, { Component } from "react"
import Input from "../components/Input"
import axios from "axios";
import Button from "../components/Button"
import Display from "../components/Display"


class PageOne extends  Component {
	state = {
		searchString : "",
		bookRecords: []
	}

	saveBook= (newBook) =>{
		console.log(newBook)
		axios.post("/api/saveBook",newBook)
		.then(response => {
			console.log(response)
		})
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
			  const books = res.data.items
			  let bookRecords = []
			  for (let i = 0; i < books.length; i++) {
				  const element  = {
					title: books[i].volumeInfo.title,
					author: books[i].volumeInfo.authors[i],
					description: books[i].volumeInfo.description,
					rating: books[i].volumeInfo.averageRating

				  };
				  bookRecords.push(element)
			  }
			  this.setState({bookRecords: bookRecords})
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
				{this.state.bookRecords.map((book, key)=> {
					return (
						<Display
						title= {book.title}
						description = {book.description}
						author= {book.author}
						rating= {book.rating}
						key={key}
						saveBook= {this.saveBook}
						></Display>
					)

				})}
			</div>
		)
	}
}

export default PageOne