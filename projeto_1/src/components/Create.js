import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');
  const [apelido, setapelido] = useState('');
  const [nucleo, setnucleo] = useState('');
  const [diretoria, setdiretoria] = useState('');


  let history = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const ids = uuid()
    let uni = ids.slice(0, 8)


    let a = nome, b = email, c = apelido, d = nucleo, f = diretoria;
    array.push({ id: uni, Nome: a, Email: b, Apelido: c, Nucleo:d, Diretoria:f});


    
    history('/')

  }

  return (
    <div >
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>


        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control onChange={e => setnome(e.target.value)}
            type="text"
            placeholder="Nome " required />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control onChange={e => setemail(e.target.value)}
            type="text"
            placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control onChange={e => setapelido(e.target.value)}
            type="text"
            placeholder="Apelido" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control onChange={e => setnucleo(e.target.value)}
            type="text"
            placeholder="Núcleo" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control onChange={e => setdiretoria(e.target.value)}
            type="text"
            placeholder="Diretoria" required />
        </Form.Group> 

  
        <Button
          onClick={e => handelSubmit(e)}
          variant="primary" type="submit">
          Enviar
        </Button>

  
        <Link className="d-grid gap-2" to='/'>
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>

      </Form>
    </div>
  )
}

export default Create