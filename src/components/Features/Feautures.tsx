const features = [
    {
        name: 'Allowance made easy',
        description:
            'Set an allowance for your kids on a daily, weekly or monthly basis, so they begin to learn to manage their own money.',
        img: "https://cdn3d.iconscout.com/3d/premium/preview/wallet-with-money-5200708-4357253.png?w=0&h=700&f=jpeg",
        aos:"fade-right" 
    },
    {
        name: 'Savings',
        description:
            'Kids and teens can set savings goals and earn a 5% p.a interest on their savings.',
        img: "https://www.natwest.com/content/dam/natwest/personal/savings/illustrations/image.dim.270.nw-pers-ill-ru-piggy-bank-coins-white-bg.png",
        aos:"fade-left" 
    },
    {
        name: 'Earn extra money',
        description:
            'Kids and teens can earn extra money by completing tasks and milestones.',
        img: "https://media.istockphoto.com/id/617601730/vector/pile-of-money-vector-icon.jpg?s=1024x1024&w=is&k=20&c=rndt7KOksHmgsVYcLQtptDldTAc8OCGtoY99fC5m9Q8=",
        aos:"fade-right" 
    },
    {
        name: 'Earn Beancoins',
        description:
            'Get your children ready for the world of digital currencies by rewarding them for tasks using beancoins, which they can later trade them in for fun and educational gifts or real money.',
        img: "https://res.cloudinary.com/dn6fnuhxr/image/upload/v1642875263/beancoin.png",
        aos:"fade-left" 
    },
    {
        name: 'Free resources',
        description:
            'Children gain access to videos, templates, quizzes, and a bunch of resources to boost your financial literacy skills.',
        img: "https://freshkillspark.org/wp-content/uploads/2020/06/Screen-Shot-2020-06-01-at-4.13.24-PM-200x200.png",
        aos:"fade-right" 
    },
    {
        name: 'Community',
        description:
            'Earlybean is more than just a micro-savings app or a digital bank. We believe in community, so we are building a community of like-minded youngsters, to help enable financial growth.',
        img: "https://m.media-amazon.com/images/I/81Ni8sfsT7L._AC_SY450_.jpg",
        aos:"fade-left" 
    },
]

function Feautures() {
    return (
        <>
            <div id="features" className="bg-white py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="sm:text-center" data-aos="zoom-out-up" data-aos-once="true">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</p>
                    </div>

                    <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            {features.map((feature, index) => (
                                <div key={index} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row" data-aos={feature.aos} data-aos-once="true">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
                                        <img src={feature.img} alt="" />
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-lg font-bold leading-8 text-gray-900">{feature.name}</p>
                                        <p className="mt-2 text-base font-semibold leading-7 text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex gap-1 items-center justify-center cursor-pointer transition transition-duration-300 mt-10 parent" data-aos="zoom-out-up" data-aos-once="true">
                            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 hover:shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join our waitlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feautures