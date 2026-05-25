import { Container, Drawer, Field,Text, Input, Portal, CloseButton } from "@chakra-ui/react";



type Props={
	openDrawNoteEdit:boolean,
	setOpenDrawNoteEdit: (e:boolean) => void
}
export default function({openDrawNoteEdit,setOpenDrawNoteEdit}:Props){


	return <Drawer.Root
          size={"md"}
          open={openDrawNoteEdit}
          onOpenChange={(e) => setOpenDrawNoteEdit(e.open)}
        >
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content bg={"#111844"}>
                <Drawer.Header>
                    <Drawer.Title color={"green.600"}>Drawer Title</Drawer.Title>
					<Drawer.CloseTrigger asChild>
					  <CloseButton size="sm" />
					</Drawer.CloseTrigger>
                </Drawer.Header>
                <Drawer.Body>
                  <Text color={"whiteAlpha.700"}>
                    {" "}
                    Edite as informações da sua anotação
                  </Text>
                  <div>
                    <Container as="form" my={"50px"}>
                      <Field.Root required>
                        <Field.Label>
                          Titulo <Field.RequiredIndicator />
                        </Field.Label>
                        <Input placeholder="Preencha com o titulo da sua anotação" />
                        <Field.HelperText>
                          O campo titulo deve ser preenchido{" "}
                        </Field.HelperText>
                      </Field.Root>
                      <Field.Root required>
                        <Field.Label>
                          Titulo <Field.RequiredIndicator />
                        </Field.Label>
                        <Input placeholder="Preencha com o titulo da sua anotação" />
                        <Field.HelperText>
                          O campo titulo deve ser preenchido{" "}
                        </Field.HelperText>
                      </Field.Root>

					  </Container>
					  </div>
					  </Drawer.Body>
					</Drawer.Content>
					</Drawer.Positioner>
					</Portal>
	</Drawer.Root>
}