import React from "react"

const styles = {
  cards : {
    borderRadius: 2,
    height: 240,
    margin: "1rem",
    position: "relative",
    width: 325,
    boxShadow: "0 3px 6px #999, 0 3px 6px #999"
  },
  imgContainer:{
    height: "100%",
    overflow: "hidden",
    textAlign: "center",
    background:"#6CADDC"
  },
  img:{
    width: "80%",
    height:"auto"
  }
}

const Body = props => (
  <div style={styles.cards}>
    <div style={styles.imgContainer}>
      <img style={styles.img} alt = {props.name} src = {props.image} onClick={ e => props.click(props.id)}/>
    </div>
  </div>
)

export default Body;
