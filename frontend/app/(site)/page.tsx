import { AuthForm } from "./component/AuthForm";

export default function Home() {
    return (
        <div className="flex min-h-full flex-col 
        justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 ">
    
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                alt="Logo"
                height="80"
                width="80"
                className="mx-auto "
                src="/images/logo.png"
                />
                <h2 className="mt-6 text-center text-3xl  
                font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <AuthForm/>

            

            
    
      
    
    
          
        </div>
    );
  }
  