import {Avatar, Box, Hidden, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import DashBoardHeading from "./DashBoardHeading"
import { CiGlobe } from "react-icons/ci";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

interface handalDrawer {
    handleDrawerToggle: () => void
}

const TopNav = ({handleDrawerToggle}:handalDrawer) => {

  const icons = [
    {
      title: "glob",
      icon: CiGlobe
    },
    {
      title: "Notification",
      icon: IoMdNotifications
    },
    {
      title: "Email",
      icon: MdOutlineEmail
    },
    {
      title: "Setting",
      icon: IoMdSettings
    }
  ]
  return (
    <div>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >

          <Stack direction={"row"}  >
            <Hidden mdUp>
              <Avatar src={"src/assets/PhoneIcon.svg"} />
            </Hidden>
            <Hidden mdDown>
              <DashBoardHeading />
            </Hidden>
          </Stack>

          <Stack direction={"row"} sx={{ alignItems: "center", gap: "3rem" }} >

            <Hidden lgDown>
              <Stack direction={"row"} spacing={"1rem"}>
              {
                  icons.map((item, index) => (
                  <>
                    <item.icon size={24} key={index} />
                  </>
                  ))
                }
                </Stack>
            </Hidden>

            <Hidden smDown >
              <Stack direction="row" spacing={"0.5rem"}  >
                <Avatar sx={{ width: 45, height: 45 }} />
                <Box>
                  <Typography variant='h6' sx={{ fontSize: "0.9rem", fontWeight: "bold" }} >Patricia Peter</Typography>
                  <Typography paragraph sx={{ color: "#878787", margin: "0px", fontSize: "0.8rem" }}>Super Admin</Typography>
                </Box>
                {/* <FaAngleDown /> */}
              </Stack>
            </Hidden>

            <Hidden smUp>
              <IconButton
                // sx={{alignSelf:"flex-end"}}
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Stack>

        </Toolbar>
    </div>
  )
}

export default TopNav