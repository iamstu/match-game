import React from "react"

const styles = {
    nav : {
        position: "fixed",
        width: "100%",
        zIndex: "900"
    },
    head : {
        width: "100%",
        background: "#cccccc",
        height: 300
    }
}

const Header = props => (
        <div>
            <nav className="navbar navbar-light bg-light" style = {styles.nav}>
                <span className="navbar-brand mb-0 h1">Clicky Game</span>
                <span className="navbar-brand mb-0 h1">Current Score = {props.currentScore}</span>
                <span className="navbar-brand mb-0 h1">High Score = {props.highScore}</span>
            </nav>
            <div style = {styles.head}>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="text-center">Click For Score (terms apply)</h1>
            </div>
        </div>
    );

export default Header