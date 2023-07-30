import { Login } from "./Login/Login";
import { Home } from "./MenuEventos/Home";
import { Detalles } from './MenuEventos/Detalles';
import { Categorias } from "./MenuEventos/Categorias/Categorias";


export const routes = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <Login />},
    { path: '/detalles', component: <Detalles />},
    { path: '/categorias', component: <Categorias />}
]