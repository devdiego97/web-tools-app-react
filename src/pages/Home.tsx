import {  Heading, SimpleGrid } from "@chakra-ui/react"
import { ListTools } from "../utils/list-tools"
import ToolItem from "../components/ToolItem"
import type { IToolItem } from "../interfaces/IToolItem"

export const Home=()=>{
	return <div className="my-44" >
		<section >
			<Heading className="text-white text-center ">Navegue entre ferramentas de organização e produtividade</Heading>
			<SimpleGrid marginY={"50px"} columns={2} gap="40px">
			{ListTools.map((i:IToolItem,k : number)=>(
				<ToolItem key={k}  icon={i.icon} path={i.path} title={i.title}  />
		   ))}
		   </SimpleGrid>
			
		</section>
	</div>
}