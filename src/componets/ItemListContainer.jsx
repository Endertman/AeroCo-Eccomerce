import { Box, Container } from "@mui/material";

const ItemListContainer = ( { titulo } ) => {
  return (
    <>
        <Container>
            <h2>
                Juegos Nuevos
            </h2>
            <Box sx={{ color: 'error.main'}}>
                <h2>
                    { titulo }
                </h2>
            </Box>
        </Container>
    </>
  );
};

export default ItemListContainer;
