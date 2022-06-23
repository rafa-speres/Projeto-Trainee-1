import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
  
  
function Edit() {
  
    // Here usestate has been used in order
    // to set and get values from the jsx
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [apelido, setapelido] = useState('');
    const [nucleo, setnucleo] = useState('');
    const [diretoria, setdiretoria] = useState('');
    const[id,setid] = useState('');

    // used for navigation with logic in javascript
    let history = useNavigate()
      
    // getting an index of an entry with an id
    var index = array.map(function(e) { return e.id; }).indexOf(id);
  
    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) =>{
        e.preventDefault(); // preventing from reload
          
        let a = array[index] // getting an index of an array
  
        // putting the value from the input textfield and
        // replacing it from existing for updation
        a.Nome = nome
        a.Email = email
        a.Apelido = apelido
        a.Nucleo = nucleo
        a.Diretoria = diretoria
  
        // redirecting to main page
        history('/')
    }
  
  
    // Useeffect take care that page will be rendered only once
    useEffect(() => {
        setnome(localStorage.getItem('Nome'))
        setemail(localStorage.getItem('Email'))
        setnome(localStorage.getItem('Apelido'))
        setemail(localStorage.getItem('Nucleo'))
        setnome(localStorage.getItem('Diretoria'))
        setid(localStorage.getItem('id'))
    }, [])
      
  return (
    <div>
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
  
            {/* setting a name from the input textfiled */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={nome} 
                              onChange={e => setnome(e.target.value)}  
                              type="text" placeholder="Digite o Nome" />
            </Form.Group>
  
            {/* setting a age from the input textfiled */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control value={email} 
                              onChange={e => setemail(e.target.value)} 
                              type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control value={apelido} 
                              onChange={e => setapelido(e.target.value)} 
                              type="text" placeholder="Apelido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control value={nucleo} 
                              onChange={e => setnucleo(e.target.value)} 
                              type="text" placeholder="Núcleo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control value={diretoria} 
                              onChange={e => setdiretoria(e.target.value)} 
                              type="text" placeholder="Diretoria" />
            </Form.Group>
            {/* Hadinling an onclick event running an edit logic */}
            <Button
            onClick={e => handelSubmit(e)}
            variant="primary" type="submit" size="lg">
                Atualizar
            </Button>
  
            {/* Redirecting to main page after editing */}
            <Link className="d-grid gap-2" to='/'>
              <Button variant="warning" size="lg">Home</Button>
            </Link>
        </Form>
    </div>
  )
}
  
export default Edit
