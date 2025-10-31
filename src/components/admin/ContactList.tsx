
import { useState } from 'react';
import { Contact } from '@/models/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Check, X, MoreHorizontal } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {useEffect} from 'react'
// Sample data for demonstration
const sampleContacts: Contact[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    message: 'Interested in automotive components.',
    status: 'approved',
    createdAt: new Date('2025-06-10T13:35:37.112Z'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+91 9876543211',
    message: 'Looking for railway parts pricing.',
    status: 'pending',
    createdAt: new Date('2025-06-10T13:35:37.112Z'),
  },
  {
    id: '3',
    name: 'Michael Johnson',
    email: 'michael@example.com',
    phone: '+91 9876543212',
    message: 'Need information about CNC machined products.',
    status: 'blocked',
    createdAt: new Date('2023-05-08T09:15:00'),
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    phone: '+91 9876543213',
    message: 'Requesting a quotation for defense components.',
    status: 'approved',
    createdAt: new Date('2023-05-07T16:20:00'),
  },
  {
    id: '5',
    name: 'Robert Brown',
    email: 'robert@example.com',
    phone: '+91 9876543214',
    message: 'Inquiry about power transmission products.',
    status: 'pending',
    createdAt: new Date('2023-05-06T11:10:00'),
  },
  {
    id: '6',
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '+91 9876543215',
    message: 'Question about material specifications.',
    status: 'approved',
    createdAt: new Date('2023-05-05T09:30:00'),
  },
  {
    id: '7',
    name: 'David Wilson',
    email: 'david@example.com',
    phone: '+91 9876543216',
    message: 'Need a custom product quotation.',
    status: 'pending',
    createdAt: new Date('2023-05-04T15:45:00'),
  },
];

export default function ContactList() {
  // const [contacts, setContacts] = useState<Contact[]>(sampleContacts);

  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(()=>{
    async function fetchdata(){
      const res = await fetch("https://shivamforge-backend.onrender.com/contacts")
      //console.log(res)
      const data = await res.json() 
      data.forEach((e)=>e.createdAt = new Date(e.createdAt))
      setContacts(data)
      //console.log("dataaaa "+typeof(data[0].createdAt))
      //console.log("dataaaa "+typeof(data[0].name))
    }
    fetchdata()
  },[])




  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
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

  const updateContactStatus = async (id: string, status: 'approved' | 'pending' | 'blocked') => {
    
    await fetch(`https://shivamforge-backend.onrender.com/contacts/${id}` , {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({status}) 
    })

    setContacts(
      contacts.map(contact =>
        contact._id === id ? { ...contact, status } : contact
      )
    );

    const statusMessage = {
      approved: 'Contact approved successfully',
      pending: 'Contact set to pending status',
      blocked: 'Contact blocked successfully',
    };

    toast({
      title: 'Status updated',
      description: statusMessage[status],
    });
  };


  async function deleteItemHandler(id:String){
    const res = await fetch(`https://shivamforge-backend.onrender.com/inquiries/${id}` , {
      method:"Delete"
    })
    const data = await res.json()
    if(data.success=='False'){
      toast({
          title: data.msg,
          description: 'Please try again later',
          variant: 'destructive',
        });
    }else{
      toast({
          title: data.msg,
          description: 'Please try again later',
        });
    }
    window.location.reload()
    
  }

  return (    
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-forge-gray-dark dark:text-white">
        User Inquiries
      </h1>

      <div className="bg-white dark:bg-forge-gray rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{formatDate(contact.createdAt)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                      {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => updateContactStatus(contact._id, 'approved')}
                          className="text-green-600 dark:text-green-400 cursor-pointer"
                        >
                          <Check className="mr-2 h-4 w-4" />
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => updateContactStatus(contact._id, 'pending')}
                          className="text-yellow-600 dark:text-yellow-400 cursor-pointer"
                        >
                          <span className="mr-2">⏳</span>
                          Set as Pending
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => updateContactStatus(contact._id, 'blocked')}
                          className="text-red-600 dark:text-red-400 cursor-pointer"
                        >
                          <X className="mr-2 h-4 w-4" />
                          Block
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => deleteItemHandler(contact._id)}
                          className="text-red-600 dark:text-red-1000 cursor-pointer"
                        >
                          <X className="" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}


// inquiries