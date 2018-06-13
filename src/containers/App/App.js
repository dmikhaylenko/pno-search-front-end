import React, {Component} from 'react';
import PageWrapper from "../PageWrapper/PageWrapper"
import {ThemeProvider} from "react-jss"

const THEME = {
    bg: {
        primary: "#5c73c3"
    },
    text: {
        primary: "#FFFFFF"
    }
}

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={THEME}>
                <PageWrapper title="TITLE">CONTENT</PageWrapper>
            </ThemeProvider>
        );
    }
}

export default App;
