import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import { TbBrandAppgallery } from "react-icons/tb";
import { BsQrCodeScan } from "react-icons/bs";
import { CiImport } from "react-icons/ci";
import SvgIcon from '@mui/material/SvgIcon';
import logo from '../assets/Logo.svg';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaBucket } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaRegClipboard } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Avatar, Icon, Stack } from '@mui/material';
// import { FaAngleDown } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { EMobiledata } from '@mui/icons-material';
import phoneLogo from 'src/assets/PhoneIcon.svg';
import { Hidden } from '@mui/material';
import DashBoardHeading from './DashBoardHeading';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

const hoversx = {
  "&:hover": {
    backgroundColor: "#4F56D3",
    color: "white"
  }
}

const SideNav = (props: Props) => {

  const menu = [
    {
      title: "Dashboard",
      icons: MdHome
    },
    {
      title: "Product",
      icons: MdOutlineProductionQuantityLimits
    },
    {
      title: "Category",
      icons: BiSolidCategory
    },
    {
      title: "Sub Category",
      icons: TbCategoryPlus
    },
    {
      title: "Brand",
      icons: TbBrandAppgallery
    },
    {
      title: "Brand",
      icons: BsQrCodeScan
    },
    {
      title: "Import Product",
      icons: CiImport
    },
  ];

  const analytics = [
    {
      title: "Sales",
      icons: FaArrowTrendUp
    },
    {
      title: "Point of Sales",
      icons: FaBucket
    },
    {
      title: "LeaderBoards",
      icons: MdLeaderboard
    },
    {
      title: "Orders",
      icons: MdOutlineLocalGroceryStore
    },
    {
      title: "Refund",
      icons: HiOutlineReceiptRefund
    },
    {
      title: "Taxes",
      icons: AiOutlinePercentage
    },
    {
      title: "Stock",
      icons: FaRegClipboard
    },
  ]

  const apps = [
    {
      title: "Chat",
      icons: IoChatboxOutline
    },
    {
      title: "Calendar",
      icons: SlCalender
    },
    {
      title: "Email",
      icons: MdOutlineEmail
    },
  ]

  const settings = [
    {
      title: "Settings",
      icons: IoMdSettings
    },
    {
      title: "Log Out",
      icons: LuLogOut
    }
  ]

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



  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Stack direction={"row"} sx={{ padding: "0.5rem" }} >
        <img className='' src={logo} />
      </Stack>
      <Divider />
      <List sx={{ padding: "1rem " }}>
        <Typography variant={'h6'} sx={{ fontSize: "1rem", color: "#C7C7C7" }}>MAIN MENU</Typography>
        {menu.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ borderRadius: "6px", gap: "0.1rem", ...hoversx }}  >
              <ListItemIcon  >
                <text.icons />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ padding: "1rem " }}>
        <Typography variant={'h6'} sx={{ fontSize: "1rem", color: "#C7C7C7" }}>ANALYTICS</Typography>
        {analytics.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ borderRadius: "6px", ...hoversx }}  >
              <ListItemIcon  >
                <text.icons />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List sx={{ padding: "1rem " }}>
        <Typography variant={'h6'} sx={{ fontSize: "1rem", color: "#C7C7C7" }}>APPS</Typography>
        {apps.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ borderRadius: "6px", ...hoversx }}  >
              <ListItemIcon  >
                <text.icons />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List sx={{ padding: "1rem " }}>
        <Typography variant={'h6'} sx={{ fontSize: "1rem", color: "#C7C7C7" }}>SETTINGS</Typography>
        {settings.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ borderRadius: "6px", ...hoversx }}  >
              <ListItemIcon  >
                <text.icons />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white",
          color: "black",
          borderRadius: "0.5rem",
          // margin:"0.5rem"
        }}
      >
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
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

export default SideNav