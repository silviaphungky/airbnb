import { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export type Props = {
  map: any
  position: { lat: number; lng: number }
  children?: ReactNode
}

function createOverlayElement() {
  const el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.display = 'inline-block'
  el.style.width = '9999px'
  return el
}

const OverlayContainer = (props: Props) => {
  const overlay = useRef<google.maps.OverlayView | null>(null)
  const el = useRef<Element | null>(null)

  class OverlayView extends window.google.maps.OverlayView {
    position: google.maps.LatLng | null = null
    content: any = null

    constructor(props: any) {
      super()
      props.position && (this.position = props.position)
      props.content && (this.content = props.content)
    }

    onAdd = () => {
      if (this.content) {
        this.getPanes()?.floatPane.appendChild(this.content)
      }
    }

    onRemove = () => {
      if (this.content?.parentElement) {
        this.content.parentElement.removeChild(this.content)
      }
    }

    draw = () => {
      if (this.position) {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
          this.position
        ) as {
          x: number
          y: number
        }
        this.content.style.left = divPosition.x + 'px'
        this.content.style.top = divPosition.y + 'px'
      }
    }
  }

  useEffect(() => {
    return () => {
      if (overlay.current) overlay.current.setMap(null)
    }
  }, [])

  if (props.map) {
    el.current = el.current || createOverlayElement()
    overlay.current =
      overlay.current ||
      new OverlayView({
        position: new google.maps.LatLng(
          props.position.lat,
          props.position.lng
        ),
        content: el.current,
      })
    overlay.current.setMap(props.map)
    return createPortal(props.children, el.current)
  }
  return null
}

export default OverlayContainer
