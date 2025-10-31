
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import Turnstile, { useTurnstile } from "react-turnstile";
import { error } from 'console';
import SEO from '../SEO';


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token , settoken] = useState<any>("")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would be a call to your backend API
      // For the demo, we'll simulate a successful submission
      
      
      // Simulate API delay
      
      let newdata ={
        data,
        token
      } 
      

      
      //console.log('detaaaaaaa:', newdata+" "+typeof(newdata));
      const res = await fetch('https://shivamforge-backend.onrender.com/push-queue' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newdata) 
      })

      const result = await res.json()
      //@ts-ignore
      //console.log("res.success "+result.success)
      //@ts-ignore
      if(result.success=='False'){
        throw new Error("invalid captcha error") 
      }
      

    
      // const resData = await res.json()
      // //console.log(resData)


      // await fetch('https://shivamforge-backend.onrender.com/contacts' , {
      //   method: 'POST',
      //   headers: {
      //       'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data) 
      // })

      // await fetch('https://shivamforge-backend.onrender.com/send-email' , {
      //   method: 'POST',
      //   headers: {
      //       'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(
      //     {
      //       recipient : data.email,
      //     }
      //   ) 
      // })

      
      
      // await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Inquiry submitted!',
        description: 'We will get back to you as soon as possible.',
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Submission failed',
        description: 'Please try again later',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
      window.location.reload()
    }
  };

  return (
    <>
    <SEO title={"ContactForm"} description={`contact Form`}/>
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your name" 
                    {...field} 
                    className="forge-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your email" 
                    type="email" 
                    {...field} 
                    className="forge-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your phone number" 
                    {...field} 
                    className="forge-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can we help you?" 
                    {...field} 
                    className="forge-input min-h-[120px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Turnstile onSuccess={(token)=>{
            settoken(token)
          }} sitekey={"0x4AAAAAABhKnFA2M2MV50sn"}/>

        
          
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-forge text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </form>
      </Form>
    </div>
    </>
  );
}
