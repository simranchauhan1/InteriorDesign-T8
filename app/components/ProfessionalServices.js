// components/ProfessionalServicesSection.jsx

import Image from 'next/image';

const ProfessionalServicesSection = () => {
    return (
        <div className="relative bg-teal-500 mt-32 items-center justify-center lg:flex lg:flex-row mb-10 lg:mb-30 ">
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
                <div className="overflow-hidden relative lg:h-[30rem] lg:w-[35rem] lg:ml-[7rem]">
                    <div className="relative h-[90%] w-[90%] m-10">
                        <Image
                            src="/images/living-room.jpg"
                            alt="Professional Services Image"
                            layout="fill"
                            objectFit="cover"
                            className="object-cover border-[1rem] h-[14rem] border-white w-auto bg-no-repeat shadow-xl"
                        />
                    </div>
                </div>
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 bg-teal-500p-10 flex flex-col justify-center lg:mr-[7rem] m-10">
                <h1 className="text-white font-bold text-3xl mb-5 lg:text-3xl">OUR PROFESSIONAL SERVICES</h1>
                <h2 className="text-2xl font-medium mb-3 text-white">We Will Create Modern And First Class Interior.</h2>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laboriosam totam. Beatae autem et sapiente nostrum libero aut accusamus, quis recusandae, asperiores blanditiis magnam deleniti explicabo fugiat numquam nobis? Architecto harum excepturi nemo similique alias fugit sunt soluta eos. Nostrum exercitationem doloribus expedita, fugit eum labore suscipit necessitatibus provident in! ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laboriosam recusandae, asperiores blanditiis magnam</p>
                <div className="mt-3 mb-3">
                            <button className="bg-white rounded-lg px-4 py-2 text-teal-500 font-bold">LEARN MORE</button>
                        </div>
            </div>
        </div>
    );
};

export default ProfessionalServicesSection;
