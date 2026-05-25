import { CardBody, CardFooter, CardRoot, Text, Image} from "@chakra-ui/react"
import { Link } from "react-router-dom"

type Props={
	icon:string,
	title:string,
	path:string
}

export default function({icon,title,path}:Props){
	return <Link to={path} 
					state={{
						title,
						icon
					}}
					>
					<CardRoot border={"none"} _hover={{
						 bg: "#1a2461",
						transition: "all 0.3s ease",
						cursor: "pointer"
					}}  bg={"#111844 "}  alignItems={"center"} justifyContent={"center"}>
						<CardBody padding={"70px"}>
							<Image className="_img" height="70px" width={"80px"} src={icon} />
						</CardBody>
						<CardFooter>
						<Text height={22}  textStyle="md" color={"HighlightText"}>{title}</Text>
						</CardFooter>
					</CardRoot>
				 </Link>
}