
import { useInView } from 'react-intersection-observer';
import { Users, ShoppingBag, BarChart3, Clock } from 'lucide-react';
import {useEffect , useState} from 'react'

const stats = [
  {
    name: 'Total Inquiries',
    value: 0,
    change: '+12%',
    icon: <Users className="h-6 w-6 text-blue-500" />,
  },
  {
    name: 'Products',
    value: 0,
    change: '+5%',
    icon: <ShoppingBag className="h-6 w-6 text-green-500" />,
  },
  {
    name: 'Revenue Growth',
    value: '18%',
    change: '+3%',
    icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
  },
  {
    name: 'Avg. Response Time',
    value: '2h',
    change: '-15%',
    icon: <Clock className="h-6 w-6 text-yellow-500" />,
  },
];

export default function DashboardStats() {
  
  // const [TotalInquiries , setTotalInquiries] = useState<string>("0")
  useEffect(()=>{
      async function fetchdataContactAndProduct(){
        const res = await fetch("https://shivamforge-backend.onrender.com/contacts")
        const data = await res.json() 
        if(data.length>0){
          stats[0].value = data.length   
          //console.log(data.length)
        }
        // const res2 = await fetch("https://shivamforge-backend.onrender.com/products")
        // const data2 = await res.json() 
        // stats[1].value = data2.length   
        // //console.log("data.length2 "+data2.length)
      }
      fetchdataContactAndProduct()
    },[])


    useEffect(()=>{
      async function fetchdataContactAndProduct(){
        const res = await fetch("https://shivamforge-backend.onrender.com/products")
        const data = await res.json() 
        if(data.length>0){
          stats[1].value = data.length   
          //console.log(data.length)
        }
        // const res2 = await fetch("https://shivamforge-backend.onrender.com/products")
        // const data2 = await res.json() 
        // stats[1].value = data2.length   
        // //console.log("data.length2 "+data2.length)
      }
      fetchdataContactAndProduct()
    },[])

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
  <div 
    ref={ref}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 sm:px-4 mt-2 sm:mt-4"

  >
    {stats.map((stat, index) => (
      <div
        key={stat.name}
        className={`bg-white dark:bg-forge-gray rounded-xl p-4 sm:p-6 min-w-[150px] shadow-md transition-all duration-500 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              {stat.name}
            </p>
            <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-semibold text-forge-gray-dark dark:text-white">
              {stat.value}
            </p>
          </div>
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-100 dark:bg-forge-gray-dark flex items-center justify-center">
            {stat.icon}
          </div>
        </div>
        <div className="mt-3 sm:mt-4">
          <span className={`text-xs sm:text-sm font-medium ${
            stat.change.startsWith('+') 
              ? 'text-green-500' 
              : 'text-red-500'
          }`}>
            {stat.change}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 ml-1 sm:ml-2">
            since last month
          </span>
        </div>
      </div>
    ))}
  </div>
);

}
