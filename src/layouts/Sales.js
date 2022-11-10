import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import SalesCostingIndex from "../pages/Sales/Sales Costing";
import SalesIndex from "../pages/Sales/Sales Enquiry";

const Sales = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/sales/sales-enquiry" component={SalesIndex} />
        <Route
          exact
          path="/sales/sales-costing"
          component={SalesCostingIndex}
        />
        <Redirect from="/sales" to="/sales/sales-enquiry" />
      </Switch>
    </div>
  );
};

export default Sales;
