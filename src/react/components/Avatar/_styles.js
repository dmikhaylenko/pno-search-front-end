import withStyle from "react-jss"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(() => {
    return {
        avatar: {
            overflow: "hidden",
            borderRadius: "100%",
            width: ({radius}) => {
                const wdth = radius ? radius * 2 : 80
                return `${wdth}px`;
            }
        },
        avatarImage: {
            margin: 0,
            width: "100%",
            position: "relative",
            padding: "0 0 100% 0",
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: ({imageURL}) => `url(${imageURL})`,
        }
    }
})