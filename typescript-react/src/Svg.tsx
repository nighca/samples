/*
 * @file component Svg
 * @author nighca <nighca@live.cn>
 */

import * as React from 'react'

export interface ISvgProps extends React.SVGAttributes<SVGElement> {
  src: string
}

export default function Svg(props: ISvgProps) {
  const { src, ...others } = props

  return (
    <svg {...others}>
      <use
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkHref={src}
      ></use>
    </svg>
  )
}
