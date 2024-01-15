import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const middleware = async(request) => {
    
    // const {pathname} = request.nextUrl;
    // const isPath = (path) => pathname.startsWith(path);

    // console.log(pathname);

    // try {
    //     let cookie = request.cookies.get('jwt-token')?.value;
    //     if(!cookie || !cookie.startsWith('Bearer')){
    //         throw new Error('Invalid Token');
    //     }
    //     const secret = new TextEncoder().encode(process.env.jwt_secret);
    //     await jwtVerify(cookie.split('Bearer ')[1], secret);
    //     if(isPath('/login') || isPath('register')){
    //         return NextResponse.redirect(new URL('/', request.url));
    //     }
    //     return NextResponse.next();
    // } 
    // catch (error) {
    //    if(isPath('/login') || isPath('/register')){
    //     return NextResponse.next();
    //    } 

    //    return NextResponse.redirect(
    //     new URL(`/login?redirectURl=${pathname}`, request.url)
    //    );
    // }
    

}


export const config = {
    matcher: [
      "/dashboard/:path*",
      "/login/:path*",
      "/register/:path*",
    ],
  };