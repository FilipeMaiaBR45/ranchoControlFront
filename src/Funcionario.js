import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    Create,
} from "react-admin";

export const FuncionarioList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="funcao" />
            <EditButton />
        </Datagrid>
    </List>
);

export const FuncionarioEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="nome" />
            <TextInput source="funcao" />
            <TextInput label="Nome da rua" source="endereco.rua" />
            <TextInput label="Nome do bairro" source="endereco.bairro" />
            <TextInput label="Nome da cidade" source="endereco.cidade" />
            <TextInput label="Estado" source="endereco.estado" />
            <TextInput label="Pais" source="endereco.pais" />
        </SimpleForm>
    </Edit>
);

export const FuncionarioCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="funcao" />
            <TextInput label="Nome da rua" source="endereco.rua" />
            <TextInput label="Nome do bairro" source="endereco.bairro" />
            <TextInput label="Nome da cidade" source="endereco.cidade" />
            <TextInput label="Estado" source="endereco.estado" />
            <TextInput label="Pais" source="endereco.pais" />
        </SimpleForm>
    </Create>
);
