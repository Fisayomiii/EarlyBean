import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Getiton from "../../../Ui/Getiton/Getiton";
import iphoneone from "../../../assets/Imgs/Hero/iPhone-13-1.png";
import iphonetwo from "../../../assets/Imgs/Hero/iPhone-13-2.png";
import iphonethree from "../../../assets/Imgs/Hero/iPhone-13-3.png";
import card from "../../../assets/Imgs/Hero/debit-card-mockup.png";




const Carosel = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className="bg-purple-800">
                        <div className="mx-auto max-w-screen-2xl">
                            <header className="flex items-center flex items-center justify-center flex-col lg:flex-row">

                                <div className="lg:pt-0 pt-10 p-5 md:pl-10 lg:pl-20">
                                    <h1 className="text-4xl lg:text-4xl xl:text-5xl text-white w-full font-bold tracking-tight">Experiential Learning</h1>
                                    <p className="text-white w-full md:w-3/5 my-6 text-lg leading-8">By managing their own money, kids and teens inherently pick up the financial skills needed for a more secure future.</p>
                                    <div className="mt-10">
                                        <p className="text-white leading-8">Coming soon</p>
                                        <Getiton />
                                    </div>
                                </div>
                                <div className="pt-10 lg:pt-10 mb-9 ">
                                    <img src={iphoneone} alt="iphone white" />
                                </div>
                            </header>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-purple-800">
                        <div className="mx-auto max-w-screen-2xl bg-purple-800">
                            <header className="flex items-center flex items-center justify-center flex-col lg:flex-row">

                                <div className="lg:pt-0 pt-10 p-5 md:pl-10 lg:pl-20">
                                    <h1 className="text-4xl lg:text-4xl xl:text-5xl text-white w-full font-bold tracking-tight">Gamified Learning</h1>
                                    <p className="text-white w-full md:w-3/5 my-6 text-lg leading-8">Stack up non-crypto digital beancoins by completing tasks and later trade them in for fun gifts or real money.</p>

                                    <div className="mt-10">
                                        <p className="text-white leading-8">Coming soon</p>
                                        <Getiton />
                                    </div>
                                </div>
                                <div className="pt-10 lg:pt-10 mb-9">
                                    <img src={iphonetwo} alt="iphone white" />
                                </div>
                            </header>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-purple-800">
                        <div className="mx-auto max-w-screen-2xl bg-purple-800">
                            <header className="flex items-center flex items-center justify-center flex-col lg:flex-row">

                                <div className="lg:pt-0 pt-10 p-5 md:pl-10 lg:pl-20">
                                    <h1 className="text-4xl lg:text-4xl xl:text-5xl text-white w-full font-bold tracking-tight">Become a money wiz</h1>
                                    <p className="text-white w-full md:w-3/5 my-6 text-lg leading-8">Through games, videos, and a bunch of other free resources, kids and teens can learn about money and finance.</p>

                                    <div className="mt-10">
                                        <p className="text-white leading-8">Coming soon</p>
                                        <Getiton />
                                    </div>
                                </div>
                                <div className="pt-10 lg:pt-10 mb-9">
                                    <img src={iphonethree} alt="iphone white" />
                                </div>
                            </header>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-purple-800">
                        <div className="mx-auto max-w-screen-2xl bg-purple-800"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <header className="flex items-center flex items-center justify-center flex-col lg:flex-row">
                                <div className="lg:pt-0 pt-10 p-5 md:pl-10 lg:pl-20">
                                    <h1 className="text-4xl lg:text-4xl xl:text-5xl text-white w-full font-bold tracking-tight">You're in Control</h1>
                                    <p className="text-white w-full md:w-3/5 my-6 text-lg leading-8">Using your prepaid Beancard, you can load and spend your money at stores and enjoy multiple perks and cashback when you do.</p>

                                    <div className="mt-10">
                                        <p className="text-white leading-8">Coming soon</p>
                                        <Getiton />
                                    </div>
                                </div>
                                <div className="pt-10 lg:pt-10 mb-9">
                                    <img src={card} alt="debit card" />
                                </div>
                            </header>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carosel