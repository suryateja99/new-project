
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  queue,
  cumqueue,
  aht,
  aht2,
  over,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>

<h3>QUEUE STATUS FOR EACH PROCESS</h3>
<GridContainer>
<GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={queue.data}
                  type="Bar"
                  options={queue.options}
                  responsiveOptions={queue.responsiveOptions}
                  listener={queue.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Queue Status of each process</h4>
                <p className={classes.cardCategory}>
                  
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                 
                </div>
              </CardFooter>
            </Card>
          </GridItem>
</GridContainer>
<h3>CUMULATIVE QUEUE FOR EACH PROCESS</h3>
<GridContainer>


          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={cumqueue.data}
                  type="Bar"
                  options={cumqueue.options}
                  responsiveOptions={cumqueue.responsiveOptions}
                  listener={cumqueue.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Cumulative queue of each process</h4>
                <p className={classes.cardCategory}>
                  
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          </GridContainer>

<h3>AHT</h3>
            <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={aht.data}
                  type="Bar"
                  options={aht.options}
                  responsiveOptions={aht.responsiveOptions}
                  listener={aht.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>AHT</h4>
                <p className={classes.cardCategory}>
                  
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={aht2.data}
                  type="Line"
                  options={aht2.options}
                  listener={aht2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}></h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                  
                  </span>{" "}
                  
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  
                </div>
              </CardFooter>
            </Card>
          </GridItem>


         
 <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>BOT Utilisation</h4>
            <p className={classes.cardCategoryWhite}>
              Percentage of Utilisation(Today and Weekly)
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Bot Name", "Today", "Weekly"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

//should be in pie     
      
<h3>Overall Process Utilisation in all bots</h3>
     

      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Current Status of running processes
            </h4>
           
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Process Name", "Status", "Status Since"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

         <GridItem>
           
           </GridItem>   





    
      </GridContainer>
    </div>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(UserProfile);
