import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Gradient from "../../Ui/Gradient/Gradient";
import earlybeanLogo from "../../../public/earlybeanLogo.png"

function Header() {
    const navigation = [
        { num: "01", name: "About", href: "#about" },
        { num: "02", name: "Feautures", href: "#features" },
        { num: "03", name: "Testimonial", href: "#testimonials" },
        // { num: "04", name: "Resources", href: "#/" },
    ];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="isolate bg-white">
                <Gradient />
                <div className="px-6 pt-5 pb-5 lg:px-8 z-40 w-full bg-white lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]dark:bg-slate-900/75 ">
                    <nav className="flex h-9 items-center justify-between">
                        <div className="cursor">
                            <a className="uppercase" href="/">
                                <div className="w-32 lg:w-40 h-auto">
                                    <img src={earlybeanLogo} alt="earlybean_logo" />
                                </div>
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)} >
                                <span className="sr-only">Open main menu</span>
                                <svg width="24" height="24" fill="none" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                        </div>
                        <ul className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 items-center">
                            {navigation.map((item) => (
                                <li>
                                    <a key={item.name} href={item.href} className="font-semibold hover:text-purple-800 dark:hover:text-purple-900" >
                                        <span className="font-semibold text-purple-500 dark:hover:text-purple-900">{item.num}. </span>{item.name}
                                    </a>
                                </li>
                            ))}
                            <button type="button" className="mt-1 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 hover:shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get early Access</button>
                        </ul>
                    </nav>


                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto backdrop-blur px-6 py-6 lg:hidden">
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
                                            <button type="button" className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                                                <div className="flex">
                                                    <span className="sr-only">Close menu</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                            </button>
                                            <ul className="space-y-6">
                                                {navigation.map((item) => (
                                                    <li>
                                                        <a key={item.name} href={item.href} className="font-semibold hover:text-purple-800 dark:hover:text-purple-900" >
                                                            <span className="font-semibold text-purple-500 dark:hover:text-purple-900">{item.num}. </span>{item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
                                                <button type="button" className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 hover:shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get early Access</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>

        </>
    );
}

export default Header;
