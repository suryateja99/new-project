import React from "react";
// nodejs library to set properties for components

import dash from "./dash.jpg";
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
  SLA,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h3>TOTAL NUMBER OF BOTS</h3>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
               
                <p className={classes.cardCategory}>Total Number Of BOTS</p>
                <h3 className={classes.cardTitle}>
                  50 <small></small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                   
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
               
                <p className={classes.cardCategory}>Available BOTS</p>
                <h3 className={classes.cardTitle}>34</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
               
                <p className={classes.cardCategory}>Idle BOTS</p>
                <h3 className={classes.cardTitle}>15</h3>
              </CardHeader>
              <CardFooter stats>

              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
             
                <p className={classes.cardCategory}>Terminated</p>
                <h3 className={classes.cardTitle}>9</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                 
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <h3>SLA BREACHES</h3>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>SLA BREACHES</h4>
                <p className={classes.cardCategoryWhite}>
                  
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["NO.OF CASES", "CASES PASSED", "CASES FAILED", "REASON"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
         
        

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={SLA.data}
                  type="Bar"
                  options={SLA.options}
                  listener={SLA.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>SLA breaches</h4>
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

          


                  </GridContainer>

                  <h3>TICKET SUMMARY</h3>

                  <GridContainer>



          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
               
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
        <h3>PROCESS SNAPSHOT</h3>
       

        <h3>SYSTEM GLANCES</h3>
       
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
