export default function GetInTouch({email, mobile, location, gitHub, linkedIn}){
    return(<div className="md:ps-8 lg:ps-8 rounded-xl my-6 gap-4 flex flex-col justify-center items-start shadow-lg shadow-yellow-800 w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-serif font-bold px-6 mt-8">Get In Touch</h1>
        <div className="flex">
            <div className="bg-blue-300 mx-4 px-2 py-4 flex justify-center items-center rounded-full">
                <img className="h-10" src="data:image/png;base64,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" alt="Gmail Image" />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-xl font-serif font-bold">Email</h4>
                <p className="text-lg">{email}</p>
            </div>
        </div>

        <div className="flex ">
            <div className="bg-blue-300 mx-4 px-2 py-4 flex justify-center items-center rounded-full">
                <img className="h-10 px-2" src="https://www.svgrepo.com/show/526083/phone-calling-rounded.svg" alt="Gmail Image" />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-xl font-serif font-bold">Phone</h4>
                <p className="text-lg">+91 {mobile}</p>

            </div>
        </div>

        <div className="flex ">
            <div className="bg-blue-300 mx-4 px-2 py-4 flex justify-center items-center rounded-full">
                <img className="h-10 px-2" src="https://www.svgrepo.com/show/513213/location-pin.svg" alt="Gmail Image" />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-xl font-serif font-bold">Location</h4>
                <p className="text-lg">{location}</p>

            </div>
        </div>
        <div className="my-6">
            <h2 className=" font-bold mb-8 text-2xl font-serif px-6">Follow Me</h2>
            <div className="flex flex-wrap">
                <a href={gitHub}  className="text-lg px-4 py-2 my-6 border-2 border-black mx-4 rounded-full bg-black text-white"><i className="fa-brands fa-github"></i>&nbsp; GitHub</a>
                <a href={linkedIn} className="text-lg px-4 py-2 my-6 border-2 border-black mx-4 rounded-full bg-blue-600 text-white"><i className="fa-brands fa-linkedin-in"></i>&nbsp; LinkedIn</a>
            </div>
        </div>
    </div>);
};