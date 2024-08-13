import Image from 'next/image';

const ServicesSection = () => {
  return (
    <div className="mt-28 bg-white">
      <div className="flex items-center justify-center">
        <h1 className="my-4 text-3xl font-bold text-blue-900">Make your home a paradise</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center mt-20 justify-between px-28">
        <div className="flex flex-col lg:flex-row rounded-lg bg-blue-100 items-center justify-center bg-cover bg-center p-5 flex-grow">
          <Image className="h-14 w-14" src="/images/power-icon.png" alt="Power Icon" />
          <div className="text ml-4">
            <h3 className="text-[1.2rem] text-blue-900 font-bold">Free online consultation</h3>
            <p className="text-[0.9rem] mt-4">Talk to our designers online and start planning your interiors from the comfort of your home.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row rounded-lg bg-blue-100 items-center justify-center bg-cover bg-center p-5 flex-grow">
          <Image className="h-14 w-14" src="/images/rocket-icon.png" alt="Rocket Icon" />
          <div className="text ml-4">
            <h3 className="text-[1.2rem] text-blue-900 font-bold">Pay just 5% to book</h3>
            <p className="text-[0.9rem] mt-4">We’ve dropped our booking fees. Now book your projects by paying just 5% instead of 10%.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row rounded-lg bg-blue-100 items-center justify-center bg-cover bg-center p-5 flex-grow">
          <Image className="h-14 w-14" src="/images/power-icon (1).png" alt="Power Icon" />
          <div className="text ml-4">
            <h3 className="text-[1.2rem] text-blue-900 font-bold">Hassle-free cancellation</h3>
            <p className="text-[0.9rem] mt-4">Get 100% refund on cancellations done within 15 days of booking. Valid till 30th June, 2020.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center font-bold text-2xl mt-20 mb-20">
        <button className="bg-orange-600 rounded-lg px-4 py-2 text-white whitespace-nowrap">Contact Now Online</button>
      </div>
    </div>
  );
};

export default ServicesSection;
