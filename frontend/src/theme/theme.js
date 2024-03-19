const primaryColorHex = "#890110"
const primaryColorDark = "#61010c"
const primaryColorLight = "#c20217"
const primaryColorTransparent = "rgba(137, 1, 16, 0.05)"

const theme = {
    components: {
        Button: {
            colorPrimary: primaryColorHex,
            defaultHoverBorderColor: primaryColorHex,
            defaultHoverColor: primaryColorHex,
            colorPrimaryHover: primaryColorDark,
        },
        Menu: {
            itemSelectedBg: primaryColorTransparent,
            itemSelectedColor: primaryColorLight
        },
        Select: {
            optionSelectedBg: primaryColorTransparent,
            optionSelectedColor: primaryColorHex,
            colorPrimaryHover: primaryColorHex,
            controlOutline: primaryColorTransparent
        },
        Input: {
            activeBorderColor: primaryColorHex,
            colorPrimary: primaryColorHex,
            colorPrimaryHover: primaryColorHex,
            activeShadow: "0 0 0 2px rgba(137, 1, 16, 0.1)"
        }
    }
}

export default theme;