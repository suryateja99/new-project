/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import ChartistGraph from "react-chartist";
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";
import {
  eer,eer2
} from "variables/charts.jsx";

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
function Icons(props) {
  const { classes } = props;
  return (
    <div>
    <h3>END-END REPORTING</h3>
    <GridContainer>
<GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={eer.data}
                  type="Bar"
                  options={eer.options}
                  responsiveOptions={eer.responsiveOptions}
                  listener={eer.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>End to end reporting</h4>
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
                  data={eer2.data}
                  type="Line"
                  options={eer2.options}
                  listener={eer2.animation}
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


</GridContainer>



</div>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
