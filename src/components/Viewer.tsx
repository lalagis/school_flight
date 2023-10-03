import 'cesium/Build/Cesium/Widgets/widgets.css'

import { Cartesian3, Color, Ion } from 'cesium'
import { useEffect, useState } from 'react'
import { CameraFlyTo, Entity, PointGraphics, Viewer as ResiumViewer } from 'resium'
import { useSnapshot } from 'valtio'

import { envStore } from '../stores/env'

const position = Cartesian3.fromDegrees(113.936372, 22.535233, 100)

export default function Viewer() {
  const env = useSnapshot(envStore)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded && env) {
      Ion.defaultAccessToken = env.CESIUM_TOKEN
      setLoaded(true)
    }
  }, [env, loaded])

  if (!loaded) return null

  return (
    <ResiumViewer
      full
      homeButton={false}
      sceneModePicker={false}
      baseLayerPicker={false}
      navigationHelpButton={false}
      geocoder={false}
      animation={false}
      timeline={false}
    >
      <Entity position={position} name="school" description="Hello, world.">
        <PointGraphics pixelSize={15} color={Color.FUCHSIA} />
      </Entity>
      <CameraFlyTo destination={Cartesian3.fromDegrees(113.936372, 22.535233, 5000)} />
    </ResiumViewer>
  )
}
