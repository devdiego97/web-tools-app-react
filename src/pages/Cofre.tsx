import { useLocation } from "react-router-dom"
import HeaderPage from "../components/HeaderPage"
import { Box, Text } from "@chakra-ui/react"


export const Cofre=()=>{
	const location = useLocation()
	const {title , icon} = location.state

	return <div>
		<HeaderPage title={title} icon={icon}/>
		<Box justifyContent="center" my={"50px"}>
			<Text textAlign={"center"}>Gerencie as suas sehas de forma segura e centralizada</Text>
		</Box>


	</div>
}