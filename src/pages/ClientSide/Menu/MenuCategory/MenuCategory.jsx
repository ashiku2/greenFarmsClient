import React from 'react';
import PopularItemCards from '../../../Shared/PopularItemCards/PopularItemCards';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {
                            items.map(item => <PopularItemCards
                                key={item._id}
                                item={item}
                            ></PopularItemCards>)
                        }
                    </div>
                </div>
                <Link to={`/order/${title}`}>
                    <button className='btn btn-outline'>Order Now</button>
                </Link>
            </section>
        </div>
    );
};

export default MenuCategory;