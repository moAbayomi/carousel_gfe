export default function ImageCarousel({ images, setImages }) {
  function handleNext() {
    setImages((prev) => {
      const currentIdx = prev.findIndex((img) => img.current);
      if (currentIdx == -1) return prev;
      const next = (currentIdx + 1) % prev.length;
      return prev.map((img, i) => ({ ...img, current: i === next }));
    });
  }

  function handlePrev() {
    setImages((prev) => {
      const currentIdx = prev.findIndex((img) => img.current);
      if (currentIdx == -1) return prev;
      const previous = (currentIdx - 1 + prev.length) % prev.length;
      return prev.map((img, i) => ({ ...img, current: i === previous }));
    });
  }

  function handleGoto(num) {
    const n = Number(num);
    if (!Number.isInteger(n) || n < 1 || n > images.length) return;
    setImages((prev) =>
      prev.map((img, i) => {
        return { ...img, current: i === n - 1 };
      }),
    );
  }
  return (
    <div className="image">
      
   
      {images.map(
        ({ alt, src, current }, i) =>
          current && (
            <div key={i} className="img-container">
              <img key={src} alt={alt} src={src} width="100%" />
              <div>
                img {i + 1} of {images.length}
              </div>
            </div>
          ),
      )}

      <div className="buttons-container">
        <button className="prev" onClick={() => handlePrev()}>
          prev
        </button>
        {Array.from({ length: images.length }).map((_, index) => (
          <button onClick={() => handleGoto(index + 1)}>{index + 1}</button>
        ))}
        <button className="next" onClick={() => handleNext()}>
          next
        </button>

      </div>
    </div>
  );
}
