import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import database from '../context/firebase';
import firebase from "firebase/compat/app";
// import 'firebase/storage';
// import { getStorage, ref } from "firebase/storage";
import { ref ,get } from "firebase/database";

// const database = firebase.database();

function StoreHashCode() {
  const [file, setFile] = useState(null);
  const [hashcode, setHashcode] = useState(null);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Read the contents of the selected file using the FileReader API
    const reader = new FileReader();
    reader.onload = async (event) => {
      const fileContents = event.target.result;

      // Generate a SHA-256 hash of the file contents using the crypto API
      const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(fileContents));
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashcode = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

      setHashcode(hashcode);

      // Store the hashcode in the database if it does not already exist
      console.log(database);
      console.log(ref(database,'/'));
      const snapshot = await ref(database,'/').orderByValue().equalTo(hashcode).once('value');
      if (!snapshot.exists()) {
        ref(database,'hashcodes').push(hashcode);
        console.log('Hashcode stored in database');
      } else {
        console.log('Hashcode already exists in database');
      }
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  return (
    <>
    
    <Navbar fixed="top" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="">BDAC</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="">MyCollections</Nav.Link>
            <Nav.Link href=""></Nav.Link> 
            <Nav.Link href="/">Log out</Nav.Link>
        </Nav>
        </Container>
    </Navbar> 

    <div>
      <input type="file" onChange={handleChange} />
      {hashcode && <p>Hashcode: {hashcode}</p>}
    </div>
    </>
  );
}

export default StoreHashCode;






 
    