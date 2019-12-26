import React from "react"
import { Gallery, GalleryImage } from "react-gesture-gallery"

const images = [
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1519010470956-6d877008eaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
]

const INITIAL_INDEX = 0

function Slider() {
  const [index, setIndex] = React.useState(INITIAL_INDEX)

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(INITIAL_INDEX)
      } else {
        setIndex(index + 1)
      }
      setIndex(index + 1)
    }, 2500)
    return () => clearInterval(interval)
  }, [index])

  return (
    <Gallery
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
      }}
      index={0}
      onRequestChange={i => {
        setIndex(i)
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" src={image} />
      ))}
    </Gallery>
  )
}

export default Slider
