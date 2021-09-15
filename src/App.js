// in src/App.js
import * as React from "react";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {
    FuncionarioCreate,
    FuncionarioEdit,
    FuncionarioList,
} from "./Funcionario";

import { AnimalCreate, AnimalEdit, AnimalList } from "./Animal";

import { BaiaCreate, BaiaEdit, BaiaList } from "./Baia";

const dataProvider = jsonServerProvider("http://localhost:8080");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="funcionario"
            list={FuncionarioList}
            create={FuncionarioCreate}
            edit={FuncionarioEdit}
        />
        <Resource
            name="animal"
            list={AnimalList}
            create={AnimalCreate}
            edit={AnimalEdit}
        />
        <Resource
            name="baia"
            list={BaiaList}
            create={BaiaCreate}
            edit={BaiaEdit}
        />
    </Admin>
);
export default App;
