import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SidebarMobile } from "./components/Sidebar.mobile";
import { useWindowSize } from "@reactuses/core";

interface IProps {
  children: React.ReactNode;
}

const SIDEBAR_WIDTH = 240;
const SIDEBAR_WIDTH_MOBILE = 56;

export const Layout: React.FC<IProps> = (props) => {
  const { children } = props;

  const [open, setOpen] = useState(false);

  const { width } = useWindowSize();

  return (
    <div>
      {width < 768 ? (
        <SidebarMobile drawerBleeding={SIDEBAR_WIDTH_MOBILE} open={open} toggle={setOpen} />
      ) : (
        <Sidebar sidebarWidth={SIDEBAR_WIDTH} open={open} onClose={() => setOpen(false)} />
      )}

      <main className="transition-all" style={{ marginLeft: open && width > 768 ? `${SIDEBAR_WIDTH}px` : "0px" }}>
        <Header onOpenSidebar={() => setOpen(true)} sidebarOpen={open} />
        {children}
      </main>
    </div>
  );
};
