import React from "react";
import {Text} from "../Text/index"
import {Avatar} from "../Avatar/index"
import {Button} from "../Button/index"

/**
 * Question functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const Question = ({title, avatar, user, date, reference, classes}) => {
    return (<section className={classes.question}>
                <section className={classes.questionUserAvatar}>
                    <Avatar imageURL={avatar}/>
                    <article className={classes.questionUserName}>
                        <Text size="1em" textWeight="medium" textStyle="italic">{user}</Text>
                    </article>
                </section>
                <section className={classes.questionInfo}>
                    <article className={classes.questionInfoTitle}>
                        <Button href={reference} classNames={[classes.questionInfoTitleLink]}>
                            <Text size="1.25em" textWeight="bold" textStyle="italic">{title}</Text>
                        </Button>
                    </article>
                    <article className={classes.questionPostedDate}>
                        <Text textColor="secondary" size="1em" textWeight="regular" textStyle="italic">Posted {date}</Text>
                    </article>

                </section>
            </section>)
}

export default Question;