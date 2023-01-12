import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, HashNavigation } from "swiper";


function Testimonials() {
    const testimonials = [
        {
            img: "https://res.cloudinary.com/dn6fnuhxr/image/upload/v1643451815/whyte.png",
            name: 'IB-Ben-Whyte',
            attribute: 'Mum Of 3',
            title: '"The transition we need"',
            description: 'My kids love money. When they get money from their auties and grandparents, they always keep it in an envelope in their travel bag. The earlybean app would be a great way for them to start being proactive about money management.',
        },
        {
            img: "https://res.cloudinary.com/dn6fnuhxr/image/upload/v1642954530/Picture.png",
            name: 'Tracy Chapele',
            attribute: 'Mum Of 1',
            title: '"The support I need"',
            description: 'As an adult, I still struggle with financial literacy. Talk less, of me teaching my kids to handle their finance. With the Earlybean app, I feel like I can have the support to teach my kids about money.',

        },
        {
            img: "https://res.cloudinary.com/dn6fnuhxr/image/upload/v1643169823/tosin-ajayi.png",
            name: 'Toyin Ajayi',
            attribute: 'Mum Of 1',
            title: '"One Less worry"',
            description: 'My biggest worry has always been my daughter growing without a strong financial background, especially when I’m not there to guide her. Thankfully, with Earlybean, that’s one less thing for me to worry about.',

        },
    ]
    return (
        <>
            <div id="testimonials" className="bg-white py-24 sm:py-32 lg:py-40 zigzag">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="sm:text-center">
                        <h2 className="text-lg font-semibold leading-8 text-purple-600">Testimonials</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What other <span className="text-purple-500">parents</span> and <span className="text-purple-500">children</span> are saying</p>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 mb-8">
                            We’ve talked and tested with a bunch of intentional parents, kids and teens too, here’s what they said.
                        </p>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        hashNavigation={{
                            watchState: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, HashNavigation]}
                        className="mySwiper"
                    >
                        {testimonials.map((testimonials, index) => (
                            <SwiperSlide data-hash="slide">
                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3 mx-auto flex flex-col items-center">
                                    <img src={testimonials.img} alt="" />
                                    <h5 className="text-lg font-bold mb-3">{testimonials.name}</h5>
                                    <p className="font-medium text-gray-700 mb-4">{testimonials.attribute}</p>
                                    <p className="font-medium text-gray-700 mb-4">{testimonials.title}</p>

                                    <p className="text-gray-500 mb-6 text-center mb-10">{testimonials.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Testimonials