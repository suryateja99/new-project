import React from "react";
// nodejs library to set properties for components

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";


import {
  kpibar,
  kpibar2,
} from "variables/charts.jsx";

function Maps() {
  return (
  
    <div>
      <h3>KPI</h3>
<GridContainer>
<GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={kpibar.data}
                  type="Bar"
                  options={kpibar.options}
                  listener={kpibar.animation}
                />
              </CardHeader>
              <CardBody>
              
              </CardBody>
              <CardFooter chart>
               
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={kpibar2.data}
                  type="Bar"
                  options={kpibar2.options}
                  listener={kpibar2.animation}
                />
              </CardHeader>
              <CardBody>
              
              </CardBody>
              <CardFooter chart>
               
              </CardFooter>
            </Card>
          </GridItem>
          

             </GridContainer>



    </div>
  );
}

export default Maps;
