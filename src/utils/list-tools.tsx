import type { IToolItem } from "../interfaces/IToolItem";



export const ListTools : IToolItem[] =[
	{
		title:"Anotações",
		icon:"./notes.png",
		path:"/anotacoes"
	},
	{
		title:"Cofree e Senhas",
		icon:"/pass.png",
		path:"/segredos_cofre"
	}
	,
	{
		title:"Financeiro",
		icon:"/financeiro.png",
		path:"/gestao_financeira"
	},
	{
		title:"Agenda",
		icon:"/agenda.png",
		path:"/minha_agenda"
	}
]