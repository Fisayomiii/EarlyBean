import boys from "../../assets/Imgs/Hero/boys.png"
import Carosel from "./Carosel/Carosel"
import Herosectwo from "./Herosectwo/Herosectwo"

function About() {
    return (
        <>
            <section id="about" className="mt-20 polygon p-20" >
                <div className="mx-auto max-w-screen-2xl">
                    <header className="flex tems-center flex items-center justify-center flex-col lg:flex-row">
                        <div className="mx-auto flex items-center xl:w-2/3" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
                            <img src={boys} loading="lazy" alt="boys" className="w-full " />
                        </div>
                        <div className="lg:block bg-no-repeat xl:w-1/2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <h3 className="text-purple-800 font-bold text-sm lg:text-lg">For parents</h3>
                            <h1 className="text-2xl md:text-3xl text-purple-900 font-bold w-full mt-4 leading-tight md:leading-snug">Get your children started on their money journey early.</h1><div className="lg:max-w-lg mt-6 text-bean-text">
                                <p className="mt-6 leading-relaxed">The cycle of money begins with earning. Teach your kids that money comes from hard work and not trees, by setting tasks for them to complete, in exchange for cash or beancoins. You can also put them on an allowance, so they learn to live within their means.</p>
                            </div>
                            <div className="flex gap-1 items-center cursor-pointer transition transition-duration-300 mt-10 parent ">
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 hover:shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join our Community</button>
                            </div>
                        </div>
                    </header><br /><br />
                </div>
            </section>
            <Herosectwo/>
            <Carosel/>
        </>
    )
}

export default About