import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../components/SectionTitle/FoodCard';
import useMenu from '../../hooks/useMenu';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

const Order = () => {
    const categories = ['salad', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const drink = menu.filter(item => item.category === 'drinks');

    
    return (
        <div>
            <Helmet>
                <title>GreenFarms | Order</title>
            </Helmet>
            <Cover img={orderImg} title={"Order food"}></Cover> 
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            salad.map(food => <FoodCard
                                key={food._id}
                                item={food}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            soup.map(food => <FoodCard
                                key={food._id}
                                item={food}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            dessert.map(food => <FoodCard
                                key={food._id}
                                item={food}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            drink.map(food => <FoodCard
                                key={food._id}
                                item={food}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default Order;