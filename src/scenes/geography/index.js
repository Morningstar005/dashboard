import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeoghyChart";


const Line=()=>{
    return(
        <Box
        m='20px'>
            <Header title="Geography Map" subtitle="World Map"/>

            <Box
            height="75vh">
                <GeographyChart/>

            </Box>
        </Box>
    )
}

export default Line;