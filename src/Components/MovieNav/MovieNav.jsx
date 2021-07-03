import React from 'react'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import "./MovieNav.css"


function MovieNav({getTitleSearch, getSearchRate}) {
    const ratingChanged = (newRating) => {
        getSearchRate(newRating);
    };
    const handleTitleChange = (e) => {
        getTitleSearch(e.target.value)
    }
    return (

        <Navbar bg="dark" variant="dark" className="MovieNav">
            <Navbar.Brand href="#home"> <img src="lembi.png" alt="logoo"className="logo" /></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline className="searchArea">
                <FormControl type="text" 
                 placeholder="Search" 
                 className="mr-sm-2 searchInput" 
                 onChange={handleTitleChange} />
                <ReactStars
                    count={5}
                    color={"white"}
                    char={"⚝"}
                    onChange={ratingChanged}
                    size={34}
                    activeColor="#ffd700"
                />
            </Form>
        </Navbar>

    )


}

export default MovieNav