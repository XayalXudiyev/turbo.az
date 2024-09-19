import { useGetAdsByIdQuery } from "../../redux/services/adsApi";

const Advertisement = () => {

    const { data: ads } = useGetAdsByIdQuery('');


    return (
        <div className="grid sm:grid-cols-2 sm:mx- md:grid-cols-3 lg:grid-cols-4 gap-7 place-items-center">
            {ads?.map((ad: any, i: number) => (
                <div key={i} className="flex flex-col items-center rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-500 cursor-pointer">
                    <img src={ad.img} alt={`${ad.marka} ${ad.model}`} className="rounded-t-lg w-full h-56 object-cover"
                    />
                    <div className="w-full p-3">
                        <h2 className="text-2xl font-bold">{ad.price} $</h2>
                        <div className="text-lg flex flex-col leading-6">
                            <span>{ad.marka} {ad.model}</span>
                            <span>{ad.year}, {ad.engine_capacity_cc} cc, {ad.mileage_km} km</span>
                        </div>
                        <p className="text-slate-400">
                            {ad.city}, {ad.time}
                        </p> 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Advertisement


















































