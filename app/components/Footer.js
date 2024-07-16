
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row bg-gray-200 p-8 lg:px-16 items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col lg:flex-row gap-9 w-full justify-between">
                <div className="flex flex-col">
                    <h3 className="font-bold text-l flex-wrap">INTERIOR DESIGN</h3>
                    <p className="mb-3 text-[0.8rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="flex flex-row gap-2 mt-6">
                        <Link href="#">
                            <Image src="/images/fb.webp" alt="Facebook" className="h-8 w-8" width={32} height={32} />
                        </Link>
                        <Link href="#">
                            <Image src="/images/insta.webp" alt="Instagram" className="h-8 w-8" width={32} height={32} />
                        </Link>
                        <Link href="#">
                            <Image src="/images/youtube.webp" alt="YouTube" className="h-8 w-8" width={32} height={32} />
                        </Link>
                        <Link href="#">
                            <Image src="/images/twitter.webp" alt="Twitter" className="h-8 w-8" width={32} height={32} />
                        </Link>
                        <Link href="#">
                            <Image src="/images/google.webp" alt="Google" className="h-8 w-8" width={32} height={32} />
                        </Link>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="text-l font-bold">Projects</h3>
                    <ul className='text-[0.8rem]'>
                        <li>WHMCS-bridge</li>
                        <li>Search Domain</li>
                        <li>My Account</li>
                        <li>Shopping Cart</li>
                        <li>Our Shop</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="text-l font-bold">Contact Us</h3>
                    <ul className="text-[0.8rem]">
                        <li>Address: C-308 New Delhi</li>
                        <li>Phone: +91 9876543210</li>
                        <li>Email: info@colorlib.com</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="text-l font-bold">Newsletter</h3>
                    <p className="text-[0.8rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
