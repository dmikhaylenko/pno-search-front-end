import React from "react";
import {Text} from "../Text"
import {Avatar} from "../Avatar"

/**
 * Question functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const Question = ({title, avatar, user, date, classes}) => {
    return (<section className={classes.question}>
            <section className={classes.questionUserAvatar}>
                <Avatar imageURL={avatar}/>

                <article className={classes.questionUserName}>
                    <Text size="1em" weight="medium" style="italic">{user}</Text>
                </article>
                <article className={classes.questionPostedDate}>
                    <Text size="0.75em" weight="regular" style="italic">{date}</Text>
                </article>
            </section>
            <section className={classes.questionInfo}>
                <article>
                    <Text size="1.25em" weight="black">{title}</Text>
                </article>
            </section>
        </section>)
}

export default Question;