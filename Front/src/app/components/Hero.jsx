export default function Hero() {
  return (
    <section className="dark:bg-gray-800 mt-20 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="65316807-7c37-4416-8a13-4975f13dc892.jpg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            BrainStorm
            
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
          Descubre un mundo de posibilidades con nuestro servicio líder en inteligencia artificial y robots diseñados para adaptarse a tus necesidades.
            
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            
            <a
              rel="noopener noreferrer"
              href="marketplace"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              MarketPlace
            </a>
            <a
              rel="noopener noreferrer"
              href="clientes"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Seller
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
