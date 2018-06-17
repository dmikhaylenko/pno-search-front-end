import _Content from "./LayoutContent"
import _Header from "./LayoutHeader"
import _Layout from "./Layout"
import jss from "./_styles"
import {pure} from "recompose"

export const Layout = pure(jss(_Layout))
export const Content = pure(jss(_Content))
export const Header = pure(jss(_Header))