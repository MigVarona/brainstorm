function Gallery() {
  return (
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src="robot-realizando-trabajo-humano_23-2150911963.jpg"
            loading="lazy"
            alt="Photo by Fakurian Design"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div class="absolute inset-0  mix-blend-multiply"></div>

          <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
           
            <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              20% de descuentos para nuevos clientes
            </h1>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;
