import CartWidget from "./CartWidget";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link, Box } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Container
        sx={{
          pt: 5,
          pb: 2,
          mb: 3,
        }}
      >
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Grid item xs={2}>
            <h2>FC Game Store</h2>
          </Grid>
          <Grid item xs={8}>
            <nav>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Link href="#" variant="body2" sx={{ color: 'error.main', fontWeight: 'bold',fontSize: 16, mx: 5 }}>
                  XBOX
                </Link>
                <Link href="#" variant="body2" sx={{ color: 'error.main', fontWeight: 'bold',fontSize: 16, mx: 5 }}>
                  Play Station
                </Link>
                <Link href="#" variant="body2" sx={{ color: 'error.main', fontWeight: 'bold',fontSize: 16, mx: 5 }}>
                  Nintento
                </Link>
                <Link href="#" variant="body2" sx={{ color: 'error.main', fontWeight: 'bold',fontSize: 16 }}>
                  PC
                </Link>
              </Box>
            </nav>
          </Grid>
          <Grid item xs={2}>
            <CartWidget />
          </Grid>
        </Grid>
        <hr></hr>
      </Container>
    </>
  );
};

export default NavBar;