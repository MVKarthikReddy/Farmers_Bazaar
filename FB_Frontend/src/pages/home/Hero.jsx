import React from "react";

function Hero() {
  return (
    <>
      <section
        //className={`relative bg-[url(https://source.unsplash.com/hEnq9TskcYE)] bg-cover bg-center bg-no-repeat`}
        className={`relative bg-[url(https://www.nicheagriculture.com/wp-content/uploads/2023/09/Are-agriculture-and-farming-the-same-Agriculture-vs-Farming-1024x680.jpg)] bg-cover bg-center bg-no-repeat`}
        // className={`relative bg-[url(https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=is&k=20&c=yJQJrnM1QX_CzMMU5l3VVxvMgJXpEYZ0WAGWRxmrWBM=)] bg-cover bg-center bg-no-repeat`}
      >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-bold md:text-5xl">
              Farmers
              <strong className="font-bold text-rose-600">Bazaar</strong>
            </h1>

            <p className="mt-3 max-w-lg sm:text-xl sm:leading-relaxed">
              Connecting Farmers and Consumers - Delivering Freshness to Your Home!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
