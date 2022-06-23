import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
  
  
function Edit() {
  
    
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [apelido, setapelido] = useState('');
    const [nucleo, setnucleo] = useState('');
    const [diretoria, setdiretoria] = useState('');
    const[id,setid] = useState('');


    let history = useNavigate()
      
    
    var index = array.map(function(e) { return e.id; }).indexOf(id);
  
    
    const handelSubmit = (e) =>{
        e.preventDefault(); 
          
        let a = array[index] 
        a.Nome = nome
        a.Email = email
        a.Apelido = apelido
        a.Nucleo = nucleo
        a.Diretoria = diretoria
  
        history('/')
    }
  
  
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
  

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={nome} 
                              onChange={e => setnome(e.target.value)}  
                              type="text" placeholder="Digite o Nome" />
            </Form.Group>
  
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
  
            <Button
            onClick={e => handelSubmit(e)}
            variant="primary" type="submit" size="lg">
                Atualizar
            </Button>
  
            <Link className="d-grid gap-2" to='/'>
              <Button variant="warning" size="lg">Home</Button>
            </Link>
        </Form>
    </div>
  )
}
  
export default Edit
