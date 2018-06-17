import hoc from "./_hoc"
import jss from "./_styles"
import _Header from "./Header"
import {pure} from "recompose"

export const Header = hoc(pure(jss(_Header)));