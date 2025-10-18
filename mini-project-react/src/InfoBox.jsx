import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
    
    let COLD_URL =
     "https://images.unsplash.com/photo-1641672222794-536ad524a929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000";

    let HOT_URL =
     "https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000";

    let RAIN_URL =
     "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000";
    return (
    <div className="InfoBox">
     <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography
         gutterBottom variant="h5"
          component="div">
          {info.city}{
            info.humidity > 80
             ? <ThunderstormIcon/>
             : info.temp > 15
             ? <WbSunnyIcon/>
             : <AcUniticon/>
          }
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
          component={"span"}
        >
           <p>Temperature = {info.temp}&deg;C </p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
           <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>  
      </Card>
      </div>      
    </div>
   );
}