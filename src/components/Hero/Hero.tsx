import child from "../../assets/Imgs/Hero/child.png"
import Getiton from "../../Ui/Getiton/Getiton";
import Scroll from "../../Ui/Scrollnav/Scroll";

function Hero() {
    const navigation = [
        { num: "01", name: "About", href: "/" },
        { num: "02", name: "Feautures", href: "/" },
        { num: "03", name: "Testimonial", href: "/" },
        { num: "04", name: "Resources", href: "/" },
    ];
    return (
        <>
            <main style={{ backgroundImage: "url(https://res.cloudinary.com/dn6fnuhxr/image/upload/v1636863926/3d-background.png)" }}><br />
                <header className="container flex flex-col sm:flex-row py-20 mx-auto max-w-screen-lg items-center">
                    <div className="w-full sm:w-2/3 px-6 py-8">
                        <h1 className="text-4xl mb-4 lg:text-6xl leading-tight xl:leading-tight text-bean-purple-900 font-bold">
                            <span className="relative inline-block">
                                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-[0] left-9 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                    <defs>
                                        <pattern id="84d09fa9-a544-44bd-88b2-08fdf4cddd38" x="0" y="0" width=".135" height=".30">
                                            <circle cx="1" cy="1" r=".7"></circle>
                                        </pattern>
                                    </defs>
                                    <rect fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)" width="52" height="24"></rect>
                                </svg>
                            </span>A <span className="text-purple-500">digital piggybank</span> for kids and teens.</h1>
                        <p className="max-w-full sm:max-w-md leading-8">Savings, earnings, investment and allowance app for kids and teens in Nigeria.</p>
                        <button type="button" className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 hover:shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get early Access</button>
                        <Getiton/>
                    </div>
                    <div className="self-start md:justify-self-end ">
                        <img src={child} alt="" className="md:w-full" />
                    </div>
                </header>

            </main>
            <Scroll />
        </>
    )
}

export default Hero