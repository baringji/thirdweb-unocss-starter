import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      violet: {
        50: "#e5d3fe",
        100: "#c8a1fc",
        200: "#9548f9",
        300: "#6207d9",
        400: "#38047c",
        500: "#0e011f",
        600: "#0b0119",
        700: "#090114",
        800: "#07000f",
        900: "#020005"
      },
    },
    textShadow: {
      'headline': '0px 0px 28px rgba(255, 255, 255, 0.45)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'none',
      fonts: {
        heading: 'Hubot Sans',
        sans: 'Mona Sans',
        mono: 'Noto Sans Mono',
      },
    }),
  ],
  shortcuts: [
    ['heading', 'font-heading font-900 text-shadow-headline'],
    ['btn', ''],
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
})
