const Gallery = () => {
  const images = [
    "src/assets/1.webp",
    "src/assets/2.webp",
    "src/assets/3.webp",
    "src/assets/4.jpeg",
    "src/assets/5.jpg",
    "src/assets/6.webp",
    "src/assets/7.webp",
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 mt-[150px]">
      <h2 className="text-3xl font-bold text-heroBg text-center mb-8">Image Gallery</h2>

      {/* ✅ Grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition 
              ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
            />
            {/* Overlay */}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
