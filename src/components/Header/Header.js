import React from "react";
import {Button} from "../Button"
import {Text} from "../Text"

const Header = ({title, textColor, classes}) => {
    return (<section className={classes.header}>
        <article className={classes.logo}>
            <Button href="#" textColor={textColor}>
                <Text weight="medium">{title}</Text>
            </Button>
        </article>
        <article className={classes.search}>

        </article>
    </section>)
}

export default Header;