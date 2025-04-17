import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CheckIcon from "@mui/icons-material/Check";

interface IProps {
  open: boolean;
  toggle: (value: boolean) => void;
  window?: () => Window;
  drawerBleeding: number
}

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[800],
  }),
}));

export const SidebarMobile: React.FC<IProps> = (props) => {
  const { window, open, toggle, drawerBleeding } = props;

  const toggleDrawer = (newOpen: boolean) => () => {
    toggle(newOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        className="relative"
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        keepMounted
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <button className={`border-gray-200 border-4 w-18 h-18 min-w-18 min-h-18 bg-gradient-to-r from-teal-400 to-lime-500 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 transition-transform ${open && 'scale-0'}`}>
            <CheckIcon className="!fill-white" />
          </button>
          <Typography sx={{ p: 2, color: "text.secondary" }}>51 results</Typography>
        </StyledBox>
        <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
};
