import React from "react"
import {PageWrapper} from "../../containers/PageWrapper"
import dateFormat from "dateformat";
import {List, Item} from "../../components/List/";
import {Question} from "../../components/Question";
import {LoadMore} from "../../components/LoadMore";
import {Text} from "../../components/Text";

export default ({$global}) => {
    const questions = [];
    const hasMore=false;
    return (<PageWrapper>
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
        <LoadMore show={hasMore}>
            <Text textWeight="medium">LOAD MORE</Text>
        </LoadMore>
    </PageWrapper>)
}