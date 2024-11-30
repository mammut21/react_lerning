import { Box, Typography } from "@mui/material";
import { SortierenProvider } from "./SortierenProvider";


const header =null

const SortierenPage:React.FC= ()=>{
return (<>
<SortierenProvider>
<Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "100vh",
      }}
    >
      {/* Kopfzeile */}
      <Box>
        
          <Box
            sx={{
              backgroundColor: "black",
              color:"white"
            }}
          >
            <Typography variant="h3" sx={{ margin: 0, paddingLeft: "100px"  }} >Sortieren</Typography> 

          </Box>
        
      </Box>

      {/* Flexibler Inhalt */}
      <Box sx={{ overflow: "auto" }}>


      <Box
     sx={{
        width: "100%", // Breite der äußeren Box
        height: "100%", // Höhe der äußeren Box
        background: `linear-gradient(
          45deg, 
          red, orange, yellow, green, blue, indigo, violet
        )`,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Optional: Schatteneffekt
        position: "relative", // Damit die innere Box sich relativ verschiebt
      }}
    ><Box
    sx={{
        width: "80%", // Breite der inneren Box
        height: "80%", // Höhe der inneren Box
        backgroundColor: "white", // Hintergrundfarbe der inneren Box
        position: "absolute", // Absolute Positionierung innerhalb der äußeren Box
        transform: "translate(10%, 10%)", // Verschiebung um 10% nach unten und rechts
      }}
  />
</Box>

        
      </Box>
    </Box>
    
    </SortierenProvider>
    </>)
}

export default SortierenPage;