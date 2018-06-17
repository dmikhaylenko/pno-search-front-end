import {compose, withState, withHandlers, lifecycle, mapProps} from "recompose"

/**
 * HOC: Search form logic implementation. This component
 * handle internal state on focus/blur and change input field.
 * @author Dmitry Mikhaylenko
 */
export default compose(
    withState("state", "setState", {
        _searchFieldRef: null,
        searchQuery: "",
        showSearchForm: false,
        searchInputIsFocused: false
    }),
    withHandlers({
        onInputRef: ({state, setState}) => (element) => {
            setState({...state,
                _searchFieldRef: element
            })
        },
        onSearchClick: ({state, setState}) => event => {
            event.stopPropagation()
            if (!state.showSearchForm) {
                setState({...state,
                    showSearchForm: true,
                    searchInputIsFocused: true
                })
            }
        },
        onSearchInputChange: ({state, setState, onSearchInput}) => (event) => {
            const searchQuery = event.target.value;
            setState({...state,
                searchQuery
            });
            onSearchInput && onSearchInput(searchQuery);
            event.stopPropagation()
        },
        onSearchInputBlur: ({state, setState}) => (event) => {
            event.target.blur()
            if (state.showSearchForm) {
                setState({...state,
                    showSearchForm: !!state.searchQuery.trim().length,
                    searchInputIsFocused: false
                })
            }
        }
    }),
    lifecycle({
        componentDidUpdate() {
            const {
                state: {
                    searchInputIsFocused,
                    _searchFieldRef,
                    showSearchForm,
                }
            } = this.props;

            if (showSearchForm && searchInputIsFocused) {
                _searchFieldRef && _searchFieldRef.focus();
            }
        }
    }),
    mapProps((props) => {
        const {state} = props;
        return {...props,
            ...state,
        }
    })
);