import { Box, Typography } from "@mui/material"

const DashBoardHeading = () => {
    return (
        <>
            <Box>
                <Typography sx={{ fontWeight: "bold" }} variant="h6" noWrap component="div">
                    DshBoard
                </Typography>
                <Typography paragraph sx={{ fontSize: "0.8rem", margin: "0px" }} >
                    The database update process runs in the background
                </Typography>
            </Box>
        </>
    )
}

export default DashBoardHeading