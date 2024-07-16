// components/AboutSection.jsx

import Image from 'next/image';

const AboutSection = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col m-7 lg:flex-row">
                <div className="flex items-center justify-center gap-8 lg:gap-0 lg:flex-1">
                    <div className="flex flex-col max-w-[40rem] lg:ml-12">
                        <h3 className="mt-10 lg:mt-0 text-blue-900 font-bold text-3xl lg:text-4xl">About Us</h3>
                        <p className="mt-4 lg:mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum eligendi mollitia blanditiis, optio eos necessitatibus voluptatum nihil incidunt maxime alias sunt officia distinctio modi at! Eveniet, natus eos. Sit tenetur ab laboriosam reprehenderit velit aut nostrum provident. Mollitia iste modi nihil consectetur suscipit sed excepturi sint beatae rem numquam pariatur temporibus est distin</p>
                        <div className="mt-6">
                            <button className="bg-blue-900 rounded-lg px-4 py-2 text-white font-bold">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="lg:flex items-center justify-center flex-1 mt-10 lg:mt-0 lg:mr-0">
                    <Image
                        src="/images/furniture1.jpg"
                        alt="About Us Image"
                        className="rounded-tl-7xl rounded-lg lg:rounded-none lg:rounded-l-7xl lg:mr-0"
                        width={700}
                        height={550}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
