import girls from "../../../assets/Imgs/Hero/girls.png"

function Herosectwo() {
    return (
        <>
            <section id="about" className="p-24" >
                <div className="mx-auto max-w-screen-2xl">
                    <header className="flex xl:gap-0 items-center flex items-center justify-center flex-col lg:flex-row">
                        <div className="lg:block bg-no-repeat xl:w-1/2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <h3 className="text-purple-800 font-bold text-sm lg:text-lg">For kids and teens</h3>
                            <h1 className="text-2xl md:text-4xl text-purple-900 font-bold w-full mt-4 leading-tight md:leading-snug">Become a responsible saver, consumer and investor.</h1>
                            <div className="lg:max-w-lg mt-6 text-bean-text">
                                <p className="mt-6 leading-relaxed">With your own virtual account number and our money management tools, you can receive money, make budgets, set savings goals, earn interests and manage your money, helping you gain some independence and make the right money choices.
                                </p>
                            </div>
                            <div className="flex gap-1 items-center cursor-pointer transition transition-duration-300 mt-10 parent ">
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 hover:shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join our Community</button>
                            </div>
                        </div>
                        <div className="mx-auto flex items-center xl:w-2/3" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
                            <img src={girls} loading="lazy" alt="boys" className="w-full " />
                        </div>
                    </header>
                </div>
            </section>
        </>
    )
}

export default Herosectwo