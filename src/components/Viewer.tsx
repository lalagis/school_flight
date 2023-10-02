import 'cesium/Build/Cesium/Widgets/widgets.css'

import { Cartesian3, Color } from 'cesium'
import { Entity, PointGraphics, Viewer as CesiumViewer } from 'resium'

const position = Cartesian3.fromDegrees(113.936372, 22.535233, 100)

export default function Viewer() {
  return (
    <CesiumViewer full>
      <Entity position={position} name="school" description="Hello, world.">
        <PointGraphics pixelSize={20} color={Color.FUCHSIA} />
      </Entity>
    </CesiumViewer>
  )
}
