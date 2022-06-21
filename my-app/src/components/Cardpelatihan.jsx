import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Pelatihancard() {
  return (
    <Card sx={{ maxWidth: 345, border: 1, m: 2, borderColor: "#4fc3f7" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/" //NANTI DIISI GAMBAR SESUAI MATERI
          alt="Gambar Materi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ paddingLeft: "1rem" }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            paddingLeft: "35%",
            paddingRight: "35%",
            backgroundColor: "#4fc3f7",
            color: "text.primary",
          }}
        >
          Lihat Detail
        </Button>
      </CardActions>
    </Card>
  );
}

export default Pelatihancard;
