import CommitChart from '@/components/CommitChart'
import React from 'react'

const Page = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#f4f1e1] to-[#fefbf7] flex flex-col py-8 md:py-0">
            <div className="text-center mt-12 md:mt-30 mb-6 md:mb-10 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black drop-shadow-[1px_1px_0_#FA812F] md:drop-shadow-[2px_2px_0_#FA812F]">
                    Commit Activity
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-2 max-w-2xl mx-auto">
                    Your coding journey visualized
                </p>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="w-full max-w-4xl flex justify-center order-2 lg:order-1">
                    <div className="w-full bg-white shadow-[4px_4px_0_#FA812F] sm:shadow-[6px_6px_0_#FA812F] md:shadow-[8px_8px_0_#FA812F] rounded-xl p-4 sm:p-6">
                        <CommitChart />
                    </div>
                </div>

                <ul className="w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 list-none text-left order-1 lg:order-2">
                    <li className="group flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></span>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] leading-relaxed text-slate-700 font-medium tracking-tight">
                            This chart reflects my GitHub activity across all repositories—
                            a living record of consistent effort and growth as a developer.
                        </p>
                    </li>

                    <li className="group flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></span>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] leading-relaxed text-slate-700 font-medium tracking-tight">
                            Each spike captures late-night debugging, fresh ideas, and small wins
                            that spark curiosity and drive innovation.
                        </p>
                    </li>

                    <li className="group flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></span>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] leading-relaxed text-slate-700 font-medium tracking-tight">
                            These commits are more than code—they're milestones of steady
                            improvement and fearless experimentation.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Page