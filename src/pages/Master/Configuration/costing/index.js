import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";

import LedgerIndex from "./ledger";
import FinanceIndex from "./finance";
import CostingTabsIndex from "./tabs";

const panel = [
  {
    name: "Ledger",
    component: "",
  },
  {
    name: "Finance",
    component: "",
  },
  {
    name: "Tabs",
    component: "",
  },
];

const ConfigCostingIndex = () => {
  const [selectedIndex, setSeletedIndex] = useState(0);

  const handleIndex = (event, newValue) => {
    setSeletedIndex(newValue);
  };

  const getSelectedComponent = () => {
    switch (selectedIndex) {
      case 0:
        return <LedgerIndex />;
        break;
      case 1:
        return <FinanceIndex />;
        break;
      case 2:
        return <CostingTabsIndex />;
        break;
      default:
        alert("Something went wrong");
    }
  };

  return (
    <div className="px-3">
      <AppBar className="rounded light-tab" position="relative" elevation={0}>
        <Tabs
          className="w-100"
          value={selectedIndex}
          onChange={handleIndex}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {panel.map((tab, index) => {
            return <Tab value={index} key={"tab" + index} label={tab.name} />;
          })}
        </Tabs>
      </AppBar>
      <div className="customtab-container w-100">{getSelectedComponent()}</div>
    </div>
  );
};

export default ConfigCostingIndex;
