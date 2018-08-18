import React from "react";

const styles = {
  body: {
    paddingTop: 50,
    background: "#ECEFF1",
    display: "flex",
    flexFlow: "row wrap",
    padding: 20,
    justifyContent: "space-around",
    alignContent: "flex-start",
    overflow: "auto"
  }
}

const Container = props => <div style = {styles.body}>{props.children}</div>;
export default Container;