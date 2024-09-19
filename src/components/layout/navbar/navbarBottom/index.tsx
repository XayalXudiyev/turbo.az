import { Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { CiCirclePlus } from "react-icons/ci";
const NavbarBottom = () => {

    const pages = [
        {
            id: 1,
            to: "/autos",
            text: 'Bütün elanlar'
        },
        {
            id: 2,
            to: "/avtosalonlar",
            text: 'Salonlar'
        },
        {
            id: 3,
            to: "/autocatalog",
            text: 'Avtokatalog'
        },
        {
            id: 4,
            to: "/motorcycle",
            text: 'Moto'
        },
        {
            id: 5,
            to: "/https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar",
            text: 'Ehtiyyat hissələr və aksessuarlar',
            target: "_blank"
        },
        {
            id: 6,
            to: "/https://tap.az/elanlar/xidmetler/neqliyyat-icaresi",
            text: 'İcarə',
            target: "_blank"
        },
    ]


    return (
        <div className="bg-red-700">
            <div className='container flex max-w-6xl items-center justify-between m-auto text-white py-2'>
                <NavLink to={'/'} className='text-xl font-bold'>
                    TURBO.AZ
                </NavLink>
                <div >
                    {pages.map((page) => (<NavLink target={page.target} className='px-3 tracking-tight' key={page.id} to={page.to}>{page.text}</NavLink>))}
                </div>
                <div >
                    <Button className='bg-yellow-500 hover:!bg-yellow-600' type="primary" size='large'>
                        <CiCirclePlus size={20} className='stroke-[1.4]' />  Yeni elan
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NavbarBottom 