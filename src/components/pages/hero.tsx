import SearchDestination from "../action/search_destination";

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center bg-gray-800 text-white relative -top-[7.85rem]" style={{backgroundImage: "url('assets/images/hero.jpg')", backgroundSize: "cover"}}>
            <div className="bg-black absolute z-10 inset-0 opacity-40"></div>
            <div className="absolute z-20 inset-0 px-8 top-[7rem] bottom-[3rem] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <p className="text-lg w-1/5">Find private stays tailored to your style. Travel uniquely with TripMate.</p>
                    <div className="flex items-center justify-center border border-white rounded-full text-sm px-4 py-3">
                        Popular 2025
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <h4 className="text-6xl font-light leading-tight">Stay Unique, <br/> Travel Freely</h4>
                    <SearchDestination/>
                </div>
            </div>
        </section>
    );
    }

export default Hero;