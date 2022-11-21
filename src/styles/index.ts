import { createStitches } from "@stitches/react";

export const {
    styled,
    config,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme:{
        colors:{
            black:'#000',
            white:"#fff"
        }
    }
})