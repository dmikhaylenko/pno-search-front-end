export default function (element, callback) {
    const rect = element ? element.getBoundingClientRect() : {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    return callback({...rect,
        get width() {
            return Math.abs(rect.left - rect.right)
        },
        get height() {
            return Math.abs(rect.bottom - rect.top)
        }
    })
}