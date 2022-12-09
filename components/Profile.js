const prof = {
    name: "Raj Aryan",
    image: "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
};

export default function Profile() {
    return (
        <div className="border-black border-2 mx-5 my-5 md:my-auto flex flex-col px-2 py-5 h-fit md:w-1/6 text-center shadow-black shadow-md">
            <img src={prof.image} alt={prof.name} className="h-20 w-20 rounded-full mx-auto" />
            <h3 className="font-bold">{prof.name}</h3>
        </div>
    );
}