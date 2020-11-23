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
    <svg dangerouslySetInnerHTML={{ __html: src }}>
    </svg>
  )
}
