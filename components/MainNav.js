import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useState} from 'react';

export default function MainNav(){

  const [searchField, setSearchField] = useState("");

  const router = useRouter();

  function submitForm(e){
    e.preventDefault();
    if(searchField != ""){
      router.push(`/artwork?title=true&q=${searchField}`);
      setSearchField("");
    }
  }

  return (
    <>
    <Navbar  expand="lg" className="fixed-top navbar-dark bg-primary">
      <Container>
        <Navbar.Brand>MET Artwork Database Viewer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
            <Link href="/search" passHref legacyBehavior><Nav.Link>Advanced Search</Nav.Link></Link>
          </Nav>
          <Form className="d-flex" onSubmit={submitForm}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchField} onChange={(e) => setSearchField(e.target.value)}
            />
            <Button type="submit" variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br /><br /><br />
    </>
  );
}