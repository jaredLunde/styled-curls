import {cx} from 'emotion'
import Type from '../Type'
import {getTheme, mergeThemeDefaults} from '../utils'
import {placeholder} from './utils'
import defaultTheme from './defaultTheme'


const themePath = 'input'


export default function Input (props) {
  const theme = mergeThemeDefaults({defaultTheme, themePath, props})

  return Type({
    bg: theme.defaultBg,
    bc: theme.defaultBorderColor,
    bw: theme.defaultBorderWidth,
    br: theme.defaultBorderRadius,
    bs: theme.defaultBoxShadow,
    p: theme.defaultPadding,
    [theme.defaultFontSize]: true,
    [theme.defaultFontWeight]: true,
    [theme.defaultFontSize]: true,
    type: 'text',
    ...props,
    nodeType: 'input',
    className: cx(placeholder(props, theme), props.className)
  })
}
