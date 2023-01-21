import React from 'react';
import logo from "../assets/logo/logo.jpg"
const Loading = () => {
    return (
        <div class="flex items-center justify-center h-screen  ">
    <div class="w-24 h-24  rounded-full animate-bounce duration-300"><img src={logo} alt="" /></div>
</div>
    );
};

export default Loading;