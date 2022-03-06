import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { BreadCrumb } from "primereact/breadcrumb";
import "./MenuBar.css";

const items = [
  { label: "Home", icon: "pi pi-fw pi-home" },
  { label: "Calendar", icon: "pi pi-fw pi-calendar" },
  { label: "Edit", icon: "pi pi-fw pi-pencil" },
  { label: "Documentation", icon: "pi pi-fw pi-file" },
  { label: "Settings", icon: "pi pi-fw pi-cog" },
];

function MenuBar() {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentTabValue, setCurrentTabValue] = useState("Home");

  const handleTabIndex = (e) => {
    setTabIndex(e.index);
    setCurrentTabValue(e.value.label);
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
