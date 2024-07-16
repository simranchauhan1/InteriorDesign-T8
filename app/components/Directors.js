// components/Directors.jsx

import Image from 'next/image';

const Directors = () => {
    return (
        <div className="bg-white py-10 px-22 mt-[6rem]"> {/* Added px-8 for horizontal padding */}
            <div className="flex flex-col items-center justify-center font-bold mt-16 p-6">
                <h1 className="text-4xl mb-7 text-gray-600">CREATIVE DIRECTORS</h1>
                <p className="text-xl text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
    
            <div className="m-8 grid grid-cols-1 lg:grid-cols-3 gap-9">
                <div className="flex flex-col items-center lg:items-start p-5 bg-cover bg-center">
                    <div className="w-full h-80 relative"> {/* Reduced height to h-80 */}
                        <Image src="/images/women1.jpg" alt="Team Member 1" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="flex flex-col mt-4 text-center lg:text-left font-bold">
                        <h3 className="text-3xl text-gray-600">John Doe</h3>
                        <p className="text-xl text-gray-500">Director</p>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start p-5 bg-cover bg-center">
                    <div className="w-full h-80 relative"> {/* Reduced height to h-80 */}
                        <Image src="/images/women2.jpg" alt="Team Member 2" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="flex flex-col mt-4 text-center lg:text-left font-bold">
                        <h3 className="text-3xl text-gray-600">Jane Smith</h3>
                        <p className="text-xl text-gray-500">Director</p>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start p-5 bg-cover bg-center">
                    <div className="w-full h-80 relative"> {/* Reduced height to h-80 */}
                        <Image src="/images/women3.jpg" alt="Team Member 3" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="flex flex-col mt-4 text-center lg:text-left font-bold">
                        <h3 className="text-3xl text-gray-600">Mike Johnson</h3>
                        <p className="text-xl text-gray-500">Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Directors;
