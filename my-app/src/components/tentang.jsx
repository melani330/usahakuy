
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import gambar from "./meeting-bro.svg";
import "../css/tentang.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#4fc3f7',
            },
        },
    }
);

export default function Tentang() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            display: 'flex', flexDirection: 'row'
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="text.primary"
              gutterBottom
              class="judul"
            >
              Tentang Usahakuy<span>.</span>ID
            </Typography>
           
            <Typography variant="h8" align="left" color="text.secondary" paragraph>
            Usahakuy.id merupakan pelatihan kewirausahaan berbasis website. Usahakuy.id menawarkan pelatihan-pelatihan menarik yang sangat dibutuhkan dalam dunia entrepreneur atau kewirausahaan melalui coaching yang diberikan untuk mempersiapkan calon wirausahawan agar dapat menjadi wirausahawan yang sukses dengan membantu meningkatkan kapasitas dan kemampuan SDM pelaku wirausaha dan masyarakat yang belum mampu mengatasi persoalan di dunia kewirausahaan.
            </Typography>
            <Stack
              sx={{ pt: 6 }}
              direction="row"
              spacing={5}
              justifyContent="left"
            >
              <Button variant="contained" background-color="primary">Daftar Sekarang</Button>
            </Stack>
          </Container>
          <Container  maxWidth="ms">
            <CardMedia
            component="img"
            sx={{ width: 700, height: 450 }}
            image={gambar}
            alt="Live from space album cover"
          />
        </Container>
        </Box>
       
      </main>
   
    </ThemeProvider>
  );
}