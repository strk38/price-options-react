import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhone] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phoneWithFakeData);
                setPhone(phoneWithFakeData)
            });
    }, [])
    return (
        <div>
            <h2 className='text-5xl'>Phone: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="price" fill="red"></Bar>
            </BarChart>
        </div>
    );
};

export default Phones;