import {useStyles} from '@style-hooks/core'
import createWithCssProp from '../createWithCssProp'
import * as styles from './styles'

/**
 * <Transitionable duration='fast' easing='swiftMove' property='opacity'>
 *   <SomeComponent o='1.0'/>
 * </Transitionable>
 */
export const getDelay = (value, props) =>
    value === true
      ? props.enterDelay !== void 0
        ? props.enterDelay
        : props.delay
      : props.leaveDelay !== void 0
      ? props.leaveDelay
      : props.delay,
  useTransitionable = props =>
    useStyles(
      'transitionable',
      styles,
      Object.assign({duration: 'normal', easing: 'linear'}, props)
    ),
  Transitionable = createWithCssProp(useTransitionable)

if (__DEV__) {
  const propTypes = require('./propTypes').default
  Transitionable.displayName = 'Transitionable'
  Transitionable.propTypes = propTypes
}
