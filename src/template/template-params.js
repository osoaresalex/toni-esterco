export const colors = {
  primary: '#D42026',
  secondary: '#fbe9e9',
  inputBorder: '#A5A5A5',
  tableBorder: '#f6d2d3',
  text: '#4E4E4E',
  white: '#FFFFFF',
};

const bodyFontSize = 16;

export function pixelToRem(pixel) {
  return `${pixel / bodyFontSize}rem`
}

export const fontFamily = {
  robotoLight: {
    fontFamily: 'Roboto',
    fontWeight: 300,
  },
  robotoRegular: {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  robotoBlack: {
    fontFamily: 'Roboto',
    fontWeight: 900,
  },
};

export const fonts = {
  title: {
    fontSize: pixelToRem(27),
    lineHeight: pixelToRem(32),
    color: colors.primary,
    ...fontFamily.robotoBlack,
  },
  subTitle: {
    fontSize: pixelToRem(27),
    lineHeight: pixelToRem(32),
    color: colors.primary,
    ...fontFamily.robotoLight,
  },
  label: {
    fontSize: pixelToRem(16),
    lineHeight: pixelToRem(19),
    color: colors.primary,
    ...fontFamily.robotoRegular,
  },
  header: {
    fontSize: pixelToRem(16),
    lineHeight: pixelToRem(19),
    color: colors.white,
    ...fontFamily.robotoRegular,
  },
  text: {
    fontSize: pixelToRem(21),
    lineHeight: pixelToRem(24),
    color: colors.text,
    ...fontFamily.robotoRegular,
  },
  pageNumber: {
    fontSize: pixelToRem(21),
    lineHeight: pixelToRem(24),
    ...fontFamily.robotoRegular,
  },
};

export const fontsMobile = {
  ...fonts,
  title: {
    ...fonts.title,
    fontSize: pixelToRem(16),
    lineHeight: pixelToRem(19),
  },
  subTitle: {
    ...fonts.subTitle,
    fontSize: pixelToRem(16),
    lineHeight: pixelToRem(19),
  },
}
