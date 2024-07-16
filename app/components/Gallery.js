// components/Gallery.jsx

import Image from 'next/image';

const Gallery = () => {
    return (
        <div className="bg-white py-10 px-14">
            <div className="flex flex-col items-center justify-center mb-16">
                <h1 className="text-gray-700 font-bold text-5xl mb-7 mt-16">Our Gallery</h1>
                <p className="text-gray-600 font-bold text-xl text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
                <div className="relative w-full h-96">
                    <Image src="/images/project1.jpg" alt="Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <div className="relative w-full h-96">
                    <Image src="/images/project2.jpg" alt="Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <div className="relative w-full h-96">
                    <Image src="/images/project3.jpg" alt="Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <div className="relative w-full h-96">
                    <Image src="/images/project4.jpg" alt="Image 4" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <div className="relative w-full h-96">
                    <Image src="/images/project5.jpg" alt="Image 5" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <div className="relative w-full h-96">
                    <Image src="/images/project6.webp" alt="Image 6" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
