import React from 'react'
import {css, cx} from 'emotion'
import ImageStat from 'react-cake/es/ImageStat'
import compose from 'react-cake/es/utils/compose'
import {FlexBox} from '../Box'
import {pr} from '../Box/CSS'
import {flex, align, justify} from '../Flex/CSS'
import {createSFCNode, getComponentTheme, supportsCSS} from '../utils'
import * as CSS from './CSS'
import propTypes from './propTypes'
import defaultTheme from './defaultTheme'


/**
<Avatar md src='...'/>
*/
const themePath = 'avatar'
const SFC = createSFCNode({
  name: 'Avatar',
  propTypes,
  defaultTheme,
  themePath,
  CSS,
  defaultNodeType: 'span'
})
const SFCWithImageStat = compose([ImageStat, SFC])
const avatarCSS = css`
  ${flex}
  ${align.center}
  ${justify.center}
  ${pr}
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`


function getImage ({src, defaultSrc, imageRef}) {
  return <img
    key={src || defaultSrc}
    src={src || defaultSrc}
    onError={e => e.target.src = defaultSrc || ''}
    ref={imageRef}
  />
}


export default function (props) {
  const supportsObjectFit = supportsCSS('object-fit')
  const theme = getComponentTheme(defaultTheme, props.theme, themePath)

  return FlexBox({
    br: theme.defaultBorderRadius,
    ...props,
    children: function (sfcProps) {
      const SFCNode = supportsObjectFit ? SFC : SFCWithImageStat
      sfcProps = {
        ...sfcProps,
        className: cx(avatarCSS, sfcProps.className),
        children: function (sfcNodeProps) {
          return (sfcProps.getImage || getImage)({...sfcProps, ...sfcNodeProps})
        }
      }

      if (supportsObjectFit) {
        sfcProps['orientation'] = 'square'
      }

      return SFCNode(sfcProps)
    }
  })
}
