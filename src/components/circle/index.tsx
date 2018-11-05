import * as PIXI from 'pixi.js'
import { CustomPIXIComponent } from 'react-pixi-fiber'

interface IProps {
  fill: number
  x: number
  y: number
  radius: number
  alpha: number
}

const TYPE = 'Circle'
export const behavior = {
  customDisplayObject: (props: IProps) => new PIXI.Graphics(),
  customApplyProps(
    instance: PIXI.Graphics,
    _oldProps: IProps,
    newProps: IProps
  ) {
    const { fill, x, y, radius, alpha } = newProps
    instance.clear()
    instance.beginFill(fill)
    instance.drawCircle(x, y, radius)
    instance.alpha = alpha
    instance.endFill()
  },
}
export default CustomPIXIComponent(behavior, TYPE)
