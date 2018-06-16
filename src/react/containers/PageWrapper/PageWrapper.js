import THEME from "./_theme"
import {Header} from "../Header"
import React, {Component} from "react"
import {ThemeProvider} from "react-jss"
import {Content} from "../../components/Content"
import provideClientRefs from "../../../common/provideClientRect"
import {Layout, Header as LayoutHeader, Content as LayoutContent} from "../../components/Layout"


/**
 * Page wrapper container. This component encapsulates page layout,
 * and header. 
 * @author Dmitry Mikhaylenko
 */
class PageWrapper extends Component {
    state = {
        _domElement: null
    }

    domRef = (element) => {
        this.setState({
            _domElement: element
        })
    }

    render() {
        const {
            children
        } = this.props;

        return provideClientRefs(this.state._domElement, (rect) => {
            return (<ThemeProvider theme={THEME}>
                <Layout>
                    <LayoutHeader domRef={this.domRef}>
                        <Header bgColor="primary" textColor="primary" title="#Searchstack"/>
                    </LayoutHeader>
                    <LayoutContent top={rect.height}>
                        <Content bgColor="secondary" textColor="inversePrimary">
                            {children}
                        </Content>
                    </LayoutContent>
                </Layout>
            </ThemeProvider>)
        })
    }
}

export default PageWrapper;