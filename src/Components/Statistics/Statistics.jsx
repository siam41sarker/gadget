import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredDataFromLs } from "../../../public/loc/storedData";
import { Helmet } from "react-helmet";
const Statistics = () => {
    const { pathname } = useLocation();
    const [isTransparent, setIsTransparent] = useState('no');

    useEffect(() => {
        if (pathname === '/') {
            setIsTransparent('yes');
        }
        else {

            setIsTransparent('no');
        }
    }, [pathname]);
    const colors = ['rgb(149,56,226)', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const loadedStat = useLoaderData();
    console.log("Loaded Stat: ")
    console.log(loadedStat);
    const [cartStat, setCartStat] = useState([]);
    useEffect(() => {
        const statFromLs = getStoredDataFromLs();
        setCartStat(statFromLs);
    }, [pathname])
    const filteredStat = loadedStat.filter(each => cartStat.includes(each.product_id));
    const dataS = filteredStat.map(eachStat => (
        {
            name: eachStat.product_title,
            uv: eachStat.price
        }
    ))
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <div className={`max-w-full ${pathname === `/statistics` && 'md:h-[260px]'} bg-[rgb(149,56,226)] md:mx-auto lg:mx-auto  border-[7px] border-solid border-[rgb(246,246,246)]`}>
                <Helmet>
                    <title>Statistics | Gadget Heaven</title>
                </Helmet>
                {pathname === `/statistics` && <NavBar isTransparent={isTransparent}></NavBar>}
                {pathname === `/statistics` && <Banner title={'Statistics'} desc={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner>}
            </div>
            <div className="max-w-7xl mx-auto mt-12">
                <h3 className="text-[rgb(11,11,11)] sora text-2xl font-bold">Statistics</h3>
                <div className="mt-12 w-full">
                    <ResponsiveContainer width="100%" height={600}>
                        <BarChart
                            data={dataS}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {dataS.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );


}

export default Statistics;