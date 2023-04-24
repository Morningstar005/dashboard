import { Box,useTheme,Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { tokens } from "../../theme";

const FAQ=()=>{
    const theme= useTheme();
    const colors= tokens(theme.palette.mode);

    return (
        <Box
        m="20px">
            <Header title="FAQ" subtitle="Requently As Question"/>


            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        AN Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a atque! Voluptatem officia necessitatibus minus accusamus ad laboriosam adipisci voluptate, reiciendis suscipit, quod optio sapiente inventore ipsam? Autem ducimus tempore in doloribus sit asperiores eveniet laborum, dolorem, similique inventore minima perferendis a architecto. Iure recusandae cupiditate impedit numquam, veritatis dicta!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem, ipsum dolor.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a atque! Voluptatem officia necessitatibus minus accusamus ad laboriosam adipisci voluptate, reiciendis suscipit, quod optio sapiente inventore ipsam? Autem ducimus tempore in doloribus sit asperiores eveniet laborum, dolorem, similique inventore minima perferendis a architecto. Iure recusandae cupiditate impedit numquam, veritatis dicta!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem, ipsum dolor.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a atque! Voluptatem officia necessitatibus minus accusamus ad laboriosam adipisci voluptate, reiciendis suscipit, quod optio sapiente inventore ipsam? Autem ducimus tempore in doloribus sit asperiores eveniet laborum, dolorem, similique inventore minima perferendis a architecto. Iure recusandae cupiditate impedit numquam, veritatis dicta!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem, ipsum dolor.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a atque! Voluptatem officia necessitatibus minus accusamus ad laboriosam adipisci voluptate, reiciendis suscipit, quod optio sapiente inventore ipsam? Autem ducimus tempore in doloribus sit asperiores eveniet laborum, dolorem, similique inventore minima perferendis a architecto. Iure recusandae cupiditate impedit numquam, veritatis dicta!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem, ipsum dolor.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a atque! Voluptatem officia necessitatibus minus accusamus ad laboriosam adipisci voluptate, reiciendis suscipit, quod optio sapiente inventore ipsam? Autem ducimus tempore in doloribus sit asperiores eveniet laborum, dolorem, similique inventore minima perferendis a architecto. Iure recusandae cupiditate impedit numquam, veritatis dicta!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem, ipsum dolor.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a atque! Voluptatem officia necessitatibus minus accusamus ad laboriosam adipisci voluptate, reiciendis suscipit, quod optio sapiente inventore ipsam? Autem ducimus tempore in doloribus sit asperiores eveniet laborum, dolorem, similique inventore minima perferendis a architecto. Iure recusandae cupiditate impedit numquam, veritatis dicta!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem, ipsum dolor.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a atque! Voluptatem officia necessitatibus minus accusamus ad laboriosam adipisci voluptate, reiciendis suscipit, quod optio sapiente inventore ipsam? Autem ducimus tempore in doloribus sit asperiores eveniet laborum, dolorem, similique inventore minima perferendis a architecto. Iure recusandae cupiditate impedit numquam, veritatis dicta!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem, ipsum dolor.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a atque! Voluptatem officia necessitatibus minus accusamus ad laboriosam adipisci voluptate, reiciendis suscipit, quod optio sapiente inventore ipsam? Autem ducimus tempore in doloribus sit asperiores eveniet laborum, dolorem, similique inventore minima perferendis a architecto. Iure recusandae cupiditate impedit numquam, veritatis dicta!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )

}

export default FAQ;