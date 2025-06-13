import React from "react"
import {ReactNode} from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const AuthLayout = async ({children}:{children:ReactNode})=>{
    const isUserAuthenticated = await isAuthenticated();
    if(isUserAuthenticated) {
      redirect("/")// here we need to do it in auth layout because we need to teel on auth page if user is authenticated he must be redirect to home page //
    }
  return(
    <div className="auth-layout"  >
      {children}

    </div>
  )
}
export default AuthLayout ; 