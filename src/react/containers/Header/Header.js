import React from "react";
import {Button} from "../../components/Button/index"
import {Text} from "../../components/Text/index"
import {Search} from "../../components/Icons/index"

/**
 * Header functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const Header = ({title, textColor, classes, onInputRef, onSearchClick, onSearchInputChange, onSearchInputBlur}) => {
    return (<section className={classes.header}>
        <article className={classes.logo}>
            <Button href="/" textColor={textColor}>
                <Text textWeight="medium" size="1.25em">{title}</Text>
            </Button>
        </article>
        <article className={classes.search}>
            <Button onClick={onSearchClick}>
                <Search className={classes.searchIcon}/>
            </Button>
        </article>
        <article className={classes.searchForm}>
            <input ref={onInputRef} type="text" onBlur={onSearchInputBlur} onChange={onSearchInputChange}
                   className={classes.searchInput}/>
        </article>
    </section>)
}

export default Header;