import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { BreadCrumb } from "primereact/breadcrumb";
import "./MenuBar.css";

const items = [
  { label: "Portfolio", icon: "pi pi-fw pi-home" },
  { label: "Blogs", icon: "pi pi-fw pi-calendar" },
  { label: "Connect", icon: "pi pi-fw pi-pencil" },
];

function MenuBar({ currentTabValue, setCurrentTabValue }) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabIndex = (e) => {
    setTabIndex(e.index);
    setCurrentTabValue(items[e.index].label);
  };

  const trackedItems = [{ label: currentTabValue }];
  const home = {
    icon: "pi pi-home",
    url: "https://www.primefaces.org/primereact",
  };

  return (
    <>
      <TabMenu
        model={items}
        activeIndex={tabIndex}
        onTabChange={handleTabIndex}
      />
      <BreadCrumb model={trackedItems} home={home} />
    </>
  );
}

export default MenuBar;
