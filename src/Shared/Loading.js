import React from 'react';
import logo from "../assets/logo/logo.jpg"
const Loading = () => {
    return (
        <div class="flex items-center justify-center h-screen  ">
    <div class="w-48 h-48  rounded-full animate-bounce duration-300 rotate-180"><img src={logo} alt="" /></div>
</div>
    );
};

export default Loading;