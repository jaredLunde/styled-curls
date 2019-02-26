import React from 'react'
import {callIfExists} from '@render-props/utils'
import createComponent from '../createComponent'
import Type from '../Type'
import propTypes from './propTypes'
import * as styles from './styles'
import * as defaultTheme from './defaultTheme'


const SFC = createComponent({name: 'textArea', styles, defaultTheme,})

function autoResize (e) {
  if (!e.target.value) {
    e.target.style.height = ''
  }
  else {
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'
  }
}

const TextArea = React.forwardRef(
  function TextArea (props, innerRef) {
    return SFC({
      __inputStyles: true,
      innerRef,
      ...props,
      children: function (typeProps) {
        typeProps.as = 'textarea'

        if (props.autoResize) {
          typeProps.onChange = function (...args) {
            callIfExists(props.onChange, ...args)
            autoResize(...args)
          }
        }

        typeProps.children = props.children
        return React.createElement(Type, typeProps)
      }
    })
  }
)

TextArea.propTypes /* remove-proptypes */ = propTypes
export default TextArea