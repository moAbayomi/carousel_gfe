import { useState } from "react";

import ImageCarousel from "./ImageCarousel";

export default function App() {
  const [images, setImages] = useState([
    {
      src: "https://picsum.photos/id/600/600/400",
      alt: "Forest",
      current: true,
    },
    {
      src: "https://picsum.photos/id/100/600/400",
      alt: "Beach",
      current: false,
    },
    {
      src: "https://picsum.photos/id/200/600/400",
      alt: "Yak",
      current: false,
    },
    {
      src: "https://picsum.photos/id/300/600/400",
      alt: "Hay",
      current: false,
    },
    {
      src: "https://picsum.photos/id/400/600/400",
      alt: "Plants",
      current: false,
    },
    {
      src: "https://picsum.photos/id/500/600/400",
      alt: "Building",
      current: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} setImages={setImages} />
    </div>
  );
}
