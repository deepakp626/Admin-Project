import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { AiOutlinePercentage } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { BsQrCodeScan } from "react-icons/bs";
import { CiImport } from "react-icons/ci";
import { FaArrowTrendUp, FaBucket, FaRegClipboard } from "react-icons/fa6";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoChatboxOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdHome, MdLeaderboard, MdOutlineEmail, MdOutlineLocalGroceryStore, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbBrandAppgallery, TbCategoryPlus } from "react-icons/tb";
import logo from '../assets/Logo.svg';

const hoversx = {
    "&:hover": {
      backgroundColor: "#4F56D3",
      color: "white"
    }
  }

const Side = () => {
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
  return (
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
  )
}

export default Side