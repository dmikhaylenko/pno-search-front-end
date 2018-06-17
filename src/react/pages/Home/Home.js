import React, {PureComponent, Fragment} from "react"
import {PageWrapper} from "../../containers/PageWrapper"
import dateFormat from "dateformat";
import {List, Item} from "../../components/List/";
import {Question} from "../../components/Question";
import {LoadMore} from "../../components/LoadMore";
import {Text} from "../../components/Text";
import {Progress} from "../../components/Progress";
import {Message} from "../../components/Message";

/**
 * HOME PAGE COMPONENT
 */
export default class extends PureComponent {
    constructor(props) {
        super(props)
        this.onSearch = this.onSearch.bind(this);
    }

    state = {
        query: "",
        page: 1
    }

    componentDidMount = () => {
        const {
            $global: {
                $actions
            }
        } = this.props;

        $actions.searchQuestions("");
    }

    componentDidUpdate = (prevProps, prevState) => {
        const {
            $global: {
                $actions
            }
        } = this.props;

        if (prevState.query !== this.state.query) {
            $actions.searchQuestions(this.state.query)
        } else if (prevState.page !== this.state.page) {
            $actions.loadSearchPage(this.state.query, this.state.page)
        }
    }

    onLoadClick = () => {
        this.setState({...this.state,
            page: this.state.page + 1
        })
    }

    onSearch(query) {
        this.setState({
            page: 1,
            query
        })
    }

    render() {
        const {
            $global: {
                $state: {
                    isSearchingProgress,
                    isLoadingProgress,
                    questions,
                    hasMore
                }
            }
        } = this.props;

        return (<PageWrapper onSearch={this.onSearch}>
            <Progress isInProgress={isSearchingProgress} spinnerColor="secondary"/>
            {
                questions.length ? (
                    <List>
                        {questions.map(({id, title, userName, imageUrl, isAnswered, reference, created}) => {
                            const date = new Date(created * 1000);
                            return (<Item key={id}>
                                <Question
                                    title={title}
                                    user={userName}
                                    avatar={imageUrl}
                                    isAnswered={isAnswered}
                                    reference={reference}
                                    date={dateFormat(date, "dd.mm.yyyy")}
                                />
                            </Item>)
                        })}
                    </List>
                ) : (
                    !isSearchingProgress
                        ? <Message text="No results found"/>
                        : <Fragment/>
                )
            }
            <LoadMore isLoadingProgress={isLoadingProgress} show={hasMore} onLoadClick={this.onLoadClick}>
                <Text textWeight="medium">LOAD MORE</Text>
            </LoadMore>
        </PageWrapper>)
    }
}