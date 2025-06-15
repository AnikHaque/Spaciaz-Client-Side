import React from "react";

const AboutJourney = () => {
  return (
    <div className="bg-black p-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-5xl text-center p-8 font-bold text-white mb-4">
          40+ years of a remarkable journey
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-base-100 lg:max-w-lg shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/HWyysL1h/journey-1983.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">1983</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 lg:max-w-lg shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/k5JHqZVT/journey-2005.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">2005</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 lg:max-w-lg shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/5tsR03Lb/journey-2013.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">2013</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 lg:max-w-lg shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/QdrPnVjG/journey-2024.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">2024</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;
