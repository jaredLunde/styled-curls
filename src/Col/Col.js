import {css} from 'emotion'
import {GridBox} from '../Box'
import {pos} from '../Box/CSS'
import {grow} from '../Flex/CSS'
import {createComponent, renderNode} from '../utils'


const defaultCSS = css`
  min-width: 0;
  ${grow};
  ${pos.relative};
`
const nodeType = 'div'
const SFC = createComponent({name: 'Col', themePath: 'col'})



export default function Col (props) {
  return SFC({
    ...props,
    children: function (boxProps) {
      boxProps.children = function (nodeProps) {
        nodeProps.children = props.children
        nodeProps.nodeType = nodeProps.nodeType || nodeType
        return renderNode(nodeProps, defaultCSS)
      }

      return GridBox(boxProps)
    }
  })
}
