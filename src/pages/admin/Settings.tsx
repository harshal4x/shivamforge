
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useRef, useState } from 'react';
import { toast } from '@/hooks/use-toast';


const Settings = () => {
  const { theme } = useTheme();
  const [isUpdatePassword , setisUpdatePassword] =useState(false) 
  const [userdata ,setuserdata] = useState(null)

  const name = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  
  

  async function callapi(){
    const res =  await fetch('https://shivamforge-backend.onrender.com/admin')
    const data = await res.json()
    setuserdata(data)
  }
  
  callapi()


  async function submitHandler(e){
    e.preventDefault()
    // //console.log("ame.current.valu "+name.current.value)

    const newdata = {
      name : name.current.value,
      password : password.current.value
    }
    // //console.log("newdata "+newdata.password)
    const res =  await fetch(`https://shivamforge-backend.onrender.com/admin/${userdata._id}`,{
      method:"Put",
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(newdata) 
    })
    const data = await res.json()

    if(data.success=="True"){
      toast({
        title: 'Password Update Successfully',
        description: data.msg
      });

    }else{
      toast({
        title: 'Updation failed',
        description: data.msg,
        variant: 'destructive',
      });
    }
    // window.location.reload()
  }

  async function updatePasswordHandler(){
    if(isUpdatePassword==true){
      setisUpdatePassword(false)
    }else{
      setisUpdatePassword(true)
    }
  }


  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-forge-gray-dark dark:text-white mb-1">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your admin preferences
          </p>
        </div>
        
        <div className="bg-white dark:bg-forge-gray rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-forge-gray-dark dark:text-white">
            Appearance
          </h2>
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="font-medium text-forge-gray-dark dark:text-white">
                Theme Mode
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Switch between light and dark mode
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-300">
                {theme === 'light' ? 'Light' : 'Dark'} mode active
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-forge-gray rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-forge-gray-dark dark:text-white">
            Security
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-forge-gray-dark dark:text-white mb-2">
                Change Password
              </h3>
              <Button onClick={updatePasswordHandler} variant="outline" className="text-forge-gray-dark dark:text-dark">
                Update Password
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {
          isUpdatePassword &&
          <form onSubmit={submitHandler}>
            <div>
              <div>
                {/* <span> name :  */}
                <input type='text' placeholder='name' defaultValue={userdata?.name} ref={name} style={{color:"Black", padding:"10px",margin:"3px" , borderRadius:"10px"}}/>
                {/* </span> */}
              </div>
              <div>
                {/* <span> password :  */}
                <input type='text' placeholder='password' defaultValue={userdata?.password} ref={password} style={{color:"Black", padding:"10px",margin:"3px", borderRadius:"10px"}}/>
                {/* </span> */}
              </div>
            </div>
            <Button>Update</Button>
        </form>
        }
        
      </div>
    </AdminLayout>
  );
};

export default Settings;
