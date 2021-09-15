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

export const BaiaList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="descricaoBaia" />
            <TextField source="funcionario_responsavel_id" />

            <EditButton />
        </Datagrid>
    </List>
);

export const BaiaEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="nome" />
            <TextInput source="descricaoBaia" />
            <TextInput source="funcionario_responsavel_id" />
        </SimpleForm>
    </Edit>
);

export const BaiaCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="nome" />
            <TextInput source="descricaoBaia" />
            <TextInput source="funcionario_responsavel_id" />
        </SimpleForm>
    </Create>
);
