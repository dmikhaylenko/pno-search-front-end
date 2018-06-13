import React, {Component} from "react"
import provideClientRefs from "../../common/provideClientRect"
import {Layout, Header, Content} from "../../components/Layout"

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
                <Header domRef={this.domRef}>
                    
                </Header>
                <Content top={rect.height}>
                    {children}
                </Content>
            </Layout>)
        })
        
    }
}

export default PageWrapper;