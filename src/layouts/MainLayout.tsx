import { Outlet } from "react-router-dom"


export const MainLayout=()=>{
	return <div>
		<header>
			cabeçalho
		</header>

		<main>
			<Outlet />
		</main>
		<footer>
			rodapé
		</footer>

	</div>
}