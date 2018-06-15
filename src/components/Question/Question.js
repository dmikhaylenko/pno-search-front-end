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
            </section>
            <section className={classes.questionInfo}>
                <article className={classes.questionInfoTitle}>
                    <Text size="1.25em" weight="black" style="italic">{title}</Text>
                </article>
                <article className={classes.questionPostedDate}>
                    <Text size="1em" weight="regular" style="italic">Posted {date}</Text>
                </article>
            </section>
        </section>)
}

export default Question;