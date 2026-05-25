import { Box, VStack ,Image ,Heading} from "@chakra-ui/react"

type Props={
	title:string,
	icon:string
}
export default function (props:Props){
	return <Box >
			<VStack>
				<Image height="120px" width="140px" src={props.icon}></Image>
				<Heading color={"whiteAlpha.700"} size={"4xl"}>{props.title}</Heading>
			</VStack>			
		</Box>
}