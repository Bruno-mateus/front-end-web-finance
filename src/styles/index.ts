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
            white:"#fff",
            gray900:'#121214'
        }
    },
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(max-width: 960px)',

      },
})