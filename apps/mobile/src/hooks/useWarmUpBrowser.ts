import { useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'

export const useWarmUpBrowser = () => {
  useEffect(() => {
    WebBrowser.warmUpAsync()
    return () => {
      WebBrowser.coolDownAsync()
    }
  }, [])
}
