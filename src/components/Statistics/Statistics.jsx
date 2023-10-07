

import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Statistics = () => {

     const donations = useLoaderData();
     console.log(donations.length);

     const getDonatioData = JSON.parse(localStorage.getItem('donate',));
     console.log(getDonatioData);
    


    const data = [
        { name: 'Total Donation', value: 12-getDonatioData.length },
        { name: 'Your Donation', value: getDonatioData.length },
       
       
      ];
      
      const FillColor = ['#ff0000', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      
      
       {
          return (
          <div className='h-[400px]'>
              <ResponsiveContainer width="100%" height="100%">
              <PieChart width={700} height={700}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={FillColor[index % FillColor.length]} />
                  ))}
                </Pie>
               
              </PieChart>
            </ResponsiveContainer>
          </div>
          );
        }
      }

export default Statistics;




