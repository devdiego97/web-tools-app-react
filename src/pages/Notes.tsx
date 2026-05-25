import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
 
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ListData } from "../utils/list";
import NoteItem from "../components/NoteItem";
import HeaderPage from "../components/HeaderPage";
import { useState } from "react";


import DrawerNoteEdit from "../components/DrawerNoteEdit";

export const Notes = () => {
  const location = useLocation();
  const { title, icon } = location.state || {};
  const [onDrawer, setOnDrawer] = useState(false);

 
  const handleClickDrawer = () => {
	setOnDrawer(true);
  };

  return (
    <div>
      <Flex>
        <HeaderPage icon={icon} title={title} />
        <Spacer />
        <Box>
          <Link to="nova_anotacao">
            <Button bgColor={"green.500"}>Nova Anotação</Button>
          </Link>
        </Box>
      </Flex>
      <Box
        height={"1.35px"}
        my={"50px"}
        borderLeftRadius={"12px"}
        borderRightRadius={"12px"}
        bg={"blue.emphasized"}
      ></Box>
      <Container>
        <Heading my={"20px"} color={"whiteAlpha.700"} textAlign={"center"}>
          Minhas Anotações
        </Heading>
        <SimpleGrid columns={3} gap={12}>
          {ListData.map((i, k) => (
            <Box key={k}>
              <NoteItem
                id={i.id}
                titulo={i.titulo}
                texto={i.texto}
                onClickDrawer={handleClickDrawer}
              />
            </Box>
          ))}
        </SimpleGrid>
		<DrawerNoteEdit openDrawNoteEdit={onDrawer} setOpenDrawNoteEdit={setOnDrawer}   />

	</Container>
	</div>
					
					


        
   
  )
}
