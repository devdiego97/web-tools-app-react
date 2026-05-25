import {
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  Drawer,
  ProgressRootProvider,
} from "@chakra-ui/react";
import type { INote } from "../../interfaces/INote";

type Props = {
  id: number;
  titulo: string;
  texto: string;
  onClickDrawer: () => void;
  onSetNote?: (note: INote) => void;
};

export default function (props: Props) {
  return (
    <CardRoot border={"none"} bg={"#111844"} height={"250px"}>
      <CardHeader color={"green.emphasized"}>{props.titulo}</CardHeader>
      <Box
        height={"1.35px"}
        my={"5px"}
        mx={"5px"}
        borderLeftRadius={"12px"}
        borderRightRadius={"12px"}
        bg={"blue.emphasized"}
      ></Box>
      <CardBody color={"whiteAlpha.800"}>{props.texto}</CardBody>
      <CardFooter justifyContent={"center"}>
        <Button bg={"green.500"} onClick={()=>props.onClickDrawer()}>
          Editar
        </Button>
        <Button bg={"red.500"}>Deletar</Button>
      </CardFooter>
    </CardRoot>
  );
}
