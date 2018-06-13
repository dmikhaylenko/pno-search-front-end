export default function getColor(themeColors, color, defaultValue) {
    return color in themeColors
        ? themeColors[color]
        : defaultValue
}
