import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import PopularItem from '../../PopularItem/PopularItem';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        
        <div>
            <Helmet>
                <title>GreenFarms | Products</title>
            </Helmet>
            <Cover img={menuImg} title={"Our menu"}></Cover>
            
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
            
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert items  */}
            <MenuCategory
                items={dessert}
                title={"dessert"}
                coverImg={dessertImg}
            ></MenuCategory>

            {/* pizza items  */}
            <MenuCategory
                items={pizza}
                title={"pizza"}
                coverImg={pizzaImg}
            ></MenuCategory>

            {/* salad items  */}
            <MenuCategory
                items={salad}
                title={"salad"}
                coverImg={saladImg}
            ></MenuCategory>

            {/* soup items  */}
            <MenuCategory
                items={soup}
                title={"soup"}
                coverImg={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;