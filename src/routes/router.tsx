import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { Notes } from "../pages/Notes";
import { Cofre } from "../pages/Cofre";
import Agenda from "../pages/Agenda";
import Financeiro from "../pages/Financeiro";
import NovaAnotacao from "../pages/NovaAnotacao";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";



export const router=createBrowserRouter([
	{
		path:"/",
		element: <MainLayout />,
		children:[
			{
				index:true,
				element:<Home />
			},
			{
				path:"/anotacoes",
				element:<Notes />,
			},
			{
				path:"/anotacoes/nova_anotacao",
				element:<NovaAnotacao />
			},
			{
				path:"/segredos_cofre",
				element:<Cofre />,
			},
			{
				path:"/minha_agenda",
				element:<Agenda />
			},
			{
				path:"/gestao_financeira",
				element:<Financeiro/>
			},
			{
				path:"/criar_conta",
				element:<Cadastro/>
			},
			{
				path:"/entrar",
				element:<Login/>
			}
		]
	}
])