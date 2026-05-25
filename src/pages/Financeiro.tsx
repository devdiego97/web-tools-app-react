import { Text } from "@chakra-ui/react"
import HeaderPage from "../components/HeaderPage"
import { useLocation } from "react-router-dom"


export default ()=>{

	const location = useLocation()
	const {icon,title} = location.state


	return <div>
		<HeaderPage  title={title} icon={icon} />
	</div>
}