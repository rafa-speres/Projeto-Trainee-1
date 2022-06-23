import React from 'react'
import { Button, Checkbox, Form, Dropdown, Menu } from 'semantic-ui-react'


const nucleos = [
    { key: 1, text: 'Estatística', value: 1 },
    { key: 2, text: 'Computação', value: 2 },
]
const diretorias = [
    { key: 1, text: 'GP', value: 1 },
    { key: 2, text: 'Vendas', value: 2 },
    { key: 2, text: 'DirEx', value: 2 },
]
const FormUsuario = () => (
    <Form>
        <Form.Field>
            <label>Nome</label>
            <input placeholder='Nome' />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='exemplo@email.com' />
        </Form.Field>
        <Form.Field>
            <label>Apelido</label>
            <input placeholder='Apelido' />
        </Form.Field>
        <Form.Field>
            <Menu compact>
                <Dropdown text='Núcleos' options={nucleos} simple item />
            </Menu>
        </Form.Field>
        <Form.Field>
            <Menu compact>
                <Dropdown text='Diretoria' options={diretorias} simple item />
            </Menu>
        </Form.Field>
        <Form.Field>
            <Checkbox label='Assessor Comercial'/>
            <Checkbox label='Diretor de Computação'/>
            <Checkbox label='Presidente'/>
        </Form.Field>

        <Button type='submit'>Submit</Button>
    </Form>
)

export default FormUsuario;