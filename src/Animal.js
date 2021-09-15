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

export const AnimalList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="idade" />
            <TextField source="peso" />
            <TextField source="descricaoBaia" />

            <EditButton />
        </Datagrid>
    </List>
);

export const AnimalEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="idade" />
            <TextInput source="peso" />
            <TextInput source="id_baia" />
        </SimpleForm>
    </Edit>
);

export const AnimalCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="idade" />
            <TextInput source="peso" />
            <TextInput source="id_baia" />
        </SimpleForm>
    </Create>
);
