
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Contact } from '@/models/types';
import { useEffect, useState } from 'react';

// Sample data for demonstration
// let [queryState , setqueryState] = useState<null>(null);
// useEffect(()=>{
//   async function fetchdata(){
//     const res = await fetch("https://shivamforge-backend.onrender.com/contacts")
//     //console.log(res)
//     const data = await res.json() 
//     // setqueryState(data)
//     //console.log("dataaaa "+data)
//   }
//   fetchdata()
// })

// const recentInquiries: Contact[] = 

// const recentInquiries: Contact[] = [
//   {
//     id: '1',
//     name: 'John Doe',
//     email: 'john@example.com',
//     phone: '+91 9876543210',
//     message: 'Interested in automotive components.',
//     status: 'approved',
//     createdAt: new Date('2023-05-10T10:30:00'),
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     email: 'jane@example.com',
//     phone: '+91 9876543211',
//     message: 'Looking for railway parts pricing.',
//     status: 'pending',
//     createdAt: new Date('2023-05-09T14:45:00'),
//   },
//   {
//     id: '3',
//     name: 'Michael Johnson',
//     email: 'michael@example.com',
//     phone: '+91 9876543212',
//     message: 'Need information about CNC machined products.',
//     status: 'blocked',
//     createdAt: new Date('2023-05-08T09:15:00'),
//   },
//   {
//     id: '4',
//     name: 'Sarah Williams',
//     email: 'sarah@example.com',
//     phone: '+91 9876543213',
//     message: 'Requesting a quotation for defense components.',
//     status: 'approved',
//     createdAt: new Date('2023-05-07T16:20:00'),
//   },
// ];







export default function RecentInquiries() {
  
  const [recentInquiries, setrecentInquiries] = useState<Contact[]>([]);

  useEffect(()=>{
    async function fetchdata(){
      const res = await fetch("https://shivamforge-backend.onrender.com/contacts")
      //console.log(res)
      const data = await res.json() 
      data.forEach((e)=>e.createdAt = new Date(e.createdAt))
      
      data.sort((a:any,b:any)=> b.createdAt - a.createdAt)
      
      for(let i=0;i<Math.min(4,data.length);i++){
        // recentInquiries[i]
        setrecentInquiries((resque)=>{
          return [...resque , data[i]]
        })
      }
      // setrecentInquiries(data)
      //console.log("dataaaa "+typeof(data[0].createdAt))
      //console.log("dataaaa "+typeof(data[0].name))
      //console.log("recentInquiries "+recentInquiries)
    }
    fetchdata()
  },[])



  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'blocked':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-forge-gray rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-forge-gray-dark">
        <h3 className="text-lg font-semibold text-forge-gray-dark dark:text-white">
          Recent Inquiries
        </h3>
        <Link to="/admin/inquiries">
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell className="font-medium">{inquiry.name}</TableCell>
                <TableCell>{inquiry.email}</TableCell>
                <TableCell>{formatDate(inquiry.createdAt)}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="max-w-xs truncate">{inquiry.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
