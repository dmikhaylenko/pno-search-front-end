import React, {Component} from "react"
import provideClientRefs from "../../common/provideClientRect"
import {Header} from "../Header"
import {Layout, Header as LayoutHeader, Content as LayoutContent} from "../../components/Layout"

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
            title,
            children
        } = this.props;

        return provideClientRefs(this.state._domElement, (rect) => {
            return (<Layout>
                <LayoutHeader domRef={this.domRef}>
                    <Header bgColor="primary" textColor="primary" title={title}/>
                </LayoutHeader>
                <LayoutContent top={rect.height}>
                    {children}
                </LayoutContent>
            </Layout>)
        })
        
    }
}

export default PageWrapper;