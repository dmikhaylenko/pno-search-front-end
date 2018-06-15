/**
 * Function return color value, defined in theme or default value
 * @param {Object} themeColors color theme
 * @param {string} color color name
 * @param {string} defaultValue default color value
 * @returns themed or default color value
 */
export default function getColor(themeColors, color, defaultValue) {
    return color in themeColors
        ? themeColors[color]
        : defaultValue
}
