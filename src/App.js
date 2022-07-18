import React, { Component } from "react";

import {
  Button,
  ModalWrapper,
  Dropdown,
  DropdownItem,
} from "carbon-components-react";

import { Grid, Column } from "@carbon/react";

import DataTableExample from "./DataTableExample";
import OfferDataTable from "./OffersDataTable.js";
import mygrid_layout from "/Users/jayantkulkarni/Desktop/carbon-ui/playing-with-carbon-master/src/GridLayout.js";

class App extends Component {
  render() {
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 ">
            <h1>Next Best Offer DashBoard</h1>
            <div class="bx--row">
              <div class="bx--col-md-16">
                <p className="bx--type-omega .bx--spacing-xl">
                  This dashboard pulls data for marketing personnel to identify
                  specific NBO opportunities to be pushed based on key
                  objectives as well as to push product that is out of year,
                  low-stock, high-stock, or brand new.
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-xs-12 ">
            <div class="bx--grid">
              <div class="bx--row">
                <div class="bx--col-md-4">
                  <DataTableExample />
                </div>
                <div class="bx--col-md-4">
                  <OfferDataTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
