import withStyle from "react-jss"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(({bg, text}) => {
    return {
        question: {
            padding: "18px",
            display: "flex",
            flexFlow: "row nowrap",
        },
        questionUserAvatar: {
            margin: 0,
            width: "120px",
            maxWidth: "120px",
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            flexFlow: "column nowrap",
            whiteSpace: "nowrap",
            overflow: "hidden"
            
        },
        questionUserName: {
            width: "100%",
            overflow: "hidden",
            textAlign: "center",
            padding: "10px 0 0 0",
            textOverflow: "ellipsis"
        },
        questionInfo: {
            flex: "1 1 auto",
            padding: "8px 0 8px 18px"
        },
        questionInfoTitle: {

        },
        questionPostedDate: {
            padding: "16px 0 0 0",
            whiteSpace: "nowrap"
        }
    }
})