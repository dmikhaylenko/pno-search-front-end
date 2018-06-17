import THEME from "./_theme"
import {Header} from "../Header"
import React, {PureComponent} from "react"
import {ThemeProvider} from "react-jss"
import {Content} from "../../components/Content"
import provideClientRefs from "../../../common/provideClientRect"
import {Layout, Header as LayoutHeader, Content as LayoutContent} from "../../components/Layout"


/**
 * Page wrapper container. This component encapsulates page layout,
 * and header.
 * @author Dmitry Mikhaylenko
 */
class PageWrapper extends PureComponent {
    state = {
        _domElement: null
    }

    domRef = (element) => {
        this.setState({
            _domElement: element
        })
    }

    onSearchInput = (query) => {
        const {
            onSearch
        } = this.props;
        
        function callByTimeout() {
            return setTimeout(() => {
                onSearch && onSearch(query)
            }, 800)
        }

        if (this._timer) {
            clearTimeout(this._timer)
            this._timer = null
        }

        this._timer = callByTimeout();
    }

    render() {
        const {
            children
        } = this.props;

        return provideClientRefs(this.state._domElement, (rect) => {
            return (<ThemeProvider theme={THEME}>
                <Layout>
                    <LayoutHeader domRef={this.domRef}>
                        <Header bgColor="primary" textColor="primary" title="#Searchstack"
                                onSearchInput={this.onSearchInput}/>
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