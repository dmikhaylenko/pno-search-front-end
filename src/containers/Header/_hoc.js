import {compose, withState, withHandlers, lifecycle, mapProps} from "recompose"

export default compose(
    withState("state", "setState", {
        _searchFieldRef: null,
        searchQuery: "",
        showSearchForm: false
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
                    showSearchForm: true
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
        onSearchInputBlur: ({state, setState}) => () => {
            if (state.showSearchForm) {
                setState({...state,
                    showSearchForm: !!state.searchQuery.trim().length
                })
            }
        }
    }),
    lifecycle({
        componentDidUpdate() {
            const {
                state: {
                    _searchFieldRef
                }
            } = this.props;
            _searchFieldRef && _searchFieldRef.focus();
        }
    }),
    mapProps((props) => {
        const {state} = props;
        return {...props,
            ...state,
        }
    })
);