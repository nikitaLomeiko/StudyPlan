import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useWindowSize } from "@reactuses/core";

interface IProps {
  onOpenSidebar: () => void;
  sidebarOpen: boolean;
}

export const Header: React.FC<IProps> = (props) => {
  const { onOpenSidebar, sidebarOpen } = props;

  const { width } = useWindowSize();

  return (
    <Toolbar className="bg-gradient-to-r from-indigo-500 to-purple-600 transition-all">
      {width > 768 && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpenSidebar}
          edge="start"
          sx={[
            {
              mr: 2,
            },
            sidebarOpen && { display: "none" },
          ]}
        >
          <MenuIcon className="!fill-white" />
        </IconButton>
      )}
      <Typography color="white" variant="h6" noWrap component="div">
        StudyPlan
      </Typography>
    </Toolbar>
  );
};
