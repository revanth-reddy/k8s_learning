import React, { useState } from 'react';
import { Card, Container, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap';


const Home = () => {
    const [search, setSearch] = useState("")
    const [response, setResponse] = useState("Response will be displayed here")

    const hitApi = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://127.0.0.1:5001/api/"+search, requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result); setResponse(result)})
            .catch(error => console.log('error', error));
    }
    
	return (    
		<Container fluid style={{ padding: "5vw" }}>
			<Card className="text-center">
				<Card.Header>Home</Card.Header>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
                        <FloatingLabel controlId="floatingInput" label="search something" className="mb-3">
                            <Form.Control type="text" placeholder="sample text" onChange={e=>setSearch(e.target.value)} value={search} />
                        </FloatingLabel>
                        <Button variant="primary" onClick={()=>hitApi()}>Test Button</Button>
                        <p>Response is {response}</p>
					</Card.Text>
					
				</Card.Body>
				<Card.Footer className="text-muted">Site last updated: Today</Card.Footer>
			</Card>
	  	</Container>
	);
  };
  
  export default Home;