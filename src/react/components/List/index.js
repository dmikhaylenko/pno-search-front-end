import jss from "./_styles"
import _List from "./List"
import _ListItem from "./ListItem"
import {pure} from "recompose"

export const List = pure(jss(_List))
export const Item = pure(jss(_ListItem))