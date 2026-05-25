
import { Container, HStack } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"


export const MainLayout=()=>{
	return   <div>
		<header className="bg-[#111844] py-3.5  flex items-center">
			<HStack>
				<div>
					<img src="/logo.png" className="  md:w-[90px]" />
				</div>
			</HStack>
		</header>
		<main className="bg-[#090d28]">
			<Container  paddingY={100}>
				<div className="min-h-screen">
					<Outlet />
				</div>
			</Container>
		</main>
	</div>
}