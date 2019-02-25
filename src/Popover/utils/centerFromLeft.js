import centerY from './centerY'


export default (containerRect, boxRect, {width, height}) => {
  let left = 'auto'
  let right = 'auto'
  let renderPosition = 'left'

  if (containerRect.left - boxRect.width > -1) {
    left = containerRect.left - boxRect.width
  } else if (containerRect.right + ((boxRect.width - containerRect.width) / 2) < width) {
    left = containerRect.right
    renderPosition = 'right'
  } else {
    left = 0
  }

  const Y = centerY(containerRect, boxRect, height)
  return {left, right, renderPosition, ...Y}
}