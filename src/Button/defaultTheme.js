import {defaultColors, defaultHoverColors, defaultActiveColors} from '../theming'
import {borderRadiusScale, borderWidthScale, getBoxShadow} from '../Box/defaultTheme'

export const scale = {
  xxs: {
    x: 12/16,
    y: 6/16,
  },
  xs: {
    x: 16/16,
    y: 8/16,
  },
  sm: {
    x: 20/16,
    y: 10/16,
  },
  md: {
    x: 24/16,
    y: 12/16,
  },
  lg: {
    x: 32/16,
    y: 16/16,
  },
  xl: {
    x: 40/16,
    y: 20/16,
  },
  xxl: {
    x: 48/16,
    y: 24/16,
  }
}

export const defaultBorderRadius = 5
export const defaultBorderWidth = 1
export const defaultBorderColor = 'translucentLight'
export const defaultBoxShadow = 0
export const defaultBg = 'blue'
export const defaultSize = 'md'
export const colors = defaultColors
export const hover = {
  colors: defaultHoverColors
}
export const active = {
  colors: defaultActiveColors
}
export {borderRadiusScale, borderWidthScale, getBoxShadow} from '../Box/defaultTheme'


export default {
  colors,
  active,
  hover,
  scale,
  defaultBg,
  defaultSize,
  defaultBoxShadow,
  defaultBorderRadius,
  defaultBorderWidth,
  defaultBorderColor,
  borderRadiusScale,
  borderWidthScale,
  getBoxShadow
}
