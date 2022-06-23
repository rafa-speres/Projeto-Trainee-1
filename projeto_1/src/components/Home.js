import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import array from './array'; 
import { Link, useNavigate } from 'react-router-dom';
  
function Home() {
  
  let history = useNavigate()
  
  function setID(id,nome,email, apelido, nucleo, diretoria){
    localStorage.setItem('id', id);
    localStorage.setItem('Nome', nome);
    localStorage.setItem('Email', email);
    localStorage.setItem('Apelido', apelido);
    localStorage.setItem('Nucleo', nucleo);
    localStorage.setItem('Diretoria', diretoria);

  }
  
  function deleted(id){
      
    var index = array.map(function(e) { return e.id; }).indexOf(id);
  
    array.splice(index,1)
  
    history('/')
  }
  
  return (
    <div  style={{margin:'10rem'}}>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Apelido</th>
      <th>Núcleo</th>
      <th>Diretoria</th>
    </tr>
  </thead>
  <tbody>
    {array.map((item) => {
return(
<tr>
      <td>{item.Nome}</td>
      <td>{item.Email}</td>
      <td>{item.Apelido}</td>
      <td>{item.Nucleo}</td>
      <td>{item.Diretoria}</td>
      
        
      <td><Link to={`/edit`}><Button onClick={(e) =>
      setID(item.id,item.Nome,item.Email,item.Apelido,item.Nucleo,item.Diretoria)} variant="info">
        Atualizar</Button></Link></td>
  

      <td><Button onClick={e => deleted(item.id)} 
      variant="danger">Deletar</Button></td>
    </tr>
)})}
  </tbody>
</Table>
  

<Link className="d-grid gap-2" to='/create'>
  <Button variant="warning" size="lg">Criar</Button>
</Link>
    </div>
  )
}
  
export default Home