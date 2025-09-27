import { Github, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#f4f1e1] flex flex-col items-center justify-center px-4 sm:px-6 py-8 md:py-0">
    
            <h1 className="text-3xl sm:text-4xl text-[#1a1a1a] md:text-5xl mb-5 font-extrabold drop-shadow-[1px_1px_0_#FA812F] md:drop-shadow-[2px_2px_0_#FA812F]">
                Let's Build Something Together
            </h1>

            <div className="w-full max-w-2xl bg-white rounded-xl shadow-[4px_4px_0_#FA812F] sm:shadow-[6px_6px_0_#FA812F] md:shadow-[8px_8px_0_#FA812F] p-4 sm:p-6 md:p-8 mx-2">
                <form className="space-y-4 sm:space-y-6">
                    {["name", "email"].map((field, i) => (
                        <input
                            key={i}
                            type={field === "email" ? "email" : "text"}
                            name={field}
                            placeholder={field === "email" ? "Your Email" : "Your Name"}
                            className="w-full px-4 py-3 text-black text-base border-4 border-[#1a1a1a] rounded-none
                                       shadow-[4px_4px_0_#FA812F] 
                                       focus:outline-none focus:ring-0
                                       hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#FA812F]
                                       transition-all duration-150"
                        />
                    ))}
                    
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 text-black text-base border-4 border-[#1a1a1a] rounded-none
                                   shadow-[4px_4px_0_#FA812F] 
                                   focus:outline-none focus:ring-0
                                   hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#FA812F]
                                   min-h-[150px] transition-all duration-150"
                    />

                    <button
                        type="submit"
                        className="cursor-pointer w-full px-6 py-3 text-base bg-[#1a1a1a] text-white 
                                   border-4 border-[#FA812F] rounded-none
                                   shadow-[4px_4px_0_#FA812F]
                                   hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#FA812F]
                                   active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                                   transition-all duration-150 font-semibold"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-6 sm:mt-8 text-center space-y-2 text-gray-700">
                    <p className="text-base">Or contact me directly:</p>
                    <a 
                        href="mailto:m.uzayr.asif@gmail.com" 
                        className="block text-base hover:text-[#FA812F] transition-colors duration-200 break-words"
                    >
                        m.uzayr.asif@gmail.com
                    </a>
                    <div className="flex justify-center gap-6 mt-4 text-xl">
                        <a 
                            href="https://github.com/m-uzayr-asif" 
                            className="hover:text-[#FA812F] transition-colors duration-200"
                        >
                            <Github />
                        </a>
                        <a 
                            href="https://linkedin.com/in/yourusername" 
                            className="hover:text-[#FA812F] transition-colors duration-200"
                        >
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>

            <p className="mt-10 text-lg text-gray-700 text-center px-2">
                Got an idea, project, or just want to chat?<br /><span className="text-[#FA812F] font-semibold"> I'd love to hear from you.</span>
            </p>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(250,129,47,0.12),transparent_70%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(250,129,47,0.08),transparent_70%)]" />
        </div>
    );
}
