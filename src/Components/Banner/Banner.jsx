const Banner = ({bannerImage,title,desc}) => {
    return (
        <div>
             <div className="mx-auto px-0 md:px-[150px]">
                <div className="flex flex-col justify-center py-8">
                    <p className="text-center text-2xl leading-none md:leading-[56px] lg:leading-[56px] md:text-4xl lg:text-4xl font-bold sora text-white px-6">{title}</p>
                    <p className="mt-4 md:mt-0 text-center text-[12px] leading-3 md:leading-[26px] lg:leading-[26px] md:text-base lg:text-base font-normal sora text-white px-6">{desc}</p>
                    {
                        bannerImage && <button className="mt-8 w-[168px] mx-auto shadow py-[15px] px-[30px] text-[rgb(149,56,226)] sora text-xl font-bold bg-white rounded-[32px] text-center">Shop Now</button>
                    }
                </div>
            </div>
            {
                bannerImage && <div className="mt-12 w-10/12 h-[350px] md:w-[810px] md:h-auto mx-auto border-2 border-solid border-white rounded-[32px] bg-[rgba(255,255,255,0.3)]">
                    <div className="p-4 md:p-6">
                        <img className="rounded-3xl w-full h-full object-cover" src={bannerImage} alt="banner" />
                    </div>
            </div>
            }
        </div>
    );
}

export default Banner;