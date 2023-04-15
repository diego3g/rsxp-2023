import { Text, View, Dimensions, ScrollView } from 'react-native'
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView'

import EventMapSVG from '@/assets/eventMap.svg'
import LegendMap from '@/components/LegendMap'

export default function EventMap() {
  const { width, height } = Dimensions.get('window')
  const sizeHeight = (height / 100) * 60

  return (
    <View className="bg-gray-950 flex-1 items-start justify-start">
      <Text className="text-gray-100 font-bold text-2xl my-8 left-4">
        Mapa do Evento
      </Text>

      <View className="w-full" style={{ height: sizeHeight }}>
        <ReactNativeZoomableView
          maxZoom={3}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          style={{
            padding: 2,
          }}
        >
          <EventMapSVG
            className="w-10 h-10"
            width={width}
            height={sizeHeight}
          />
        </ReactNativeZoomableView>
      </View>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View className="mx-4 mb-4 grid grid-cols-2" id="Legend Maps Field">
          <LegendMap color={'#2EBCF1'}>Banheiro Masculino</LegendMap>
          <LegendMap color={'#FF00FF'}>Banheiro Feminino</LegendMap>
        </View>
      </ScrollView>
    </View>
  )
}
