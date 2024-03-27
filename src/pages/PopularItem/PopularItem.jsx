import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import PopularItemCards from '../Shared/PopularItemCards/PopularItemCards';
import useMenu from '../../hooks/useMenu';

const PopularItem = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data =>
    //         {
    //             const popular = data.filter(item => item.category === 'popular');
    //             setMenu(popular)
    //             })
    // }, [])

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                heading={"Items"}
                subHeading={"popular items"}
            ></SectionTitle>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            
                            {
                                popular.map(item => <PopularItemCards
                                    key={item._id}
                                    item={item}
                                ></PopularItemCards>)
                            }
                        </div>
                    </div>
                </section>
                
            </div>
        </section>
    );
};

export default PopularItem;