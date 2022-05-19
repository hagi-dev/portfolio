import React from "react";
import ContextStateNavBar from "../../components/NavBar/context/contextState";

const Home = () => {
  const button = React.useContext(ContextStateNavBar);
  let color = button.state.Home
    ? "rgba(111, 255, 233, 1)"
    : "rgba(91, 192, 190, 1)";
  let stroke = button.state.Home ? 1 : 2  
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_42_56)">
        <path
          d="M23.8556 12.5896L21.2681 10.2464V4.65674C21.2681 4.41586 21.0728 4.221 20.8324 4.221H18.5547C18.439 4.221 18.3278 4.26653 18.2458 4.34869C18.1636 4.43084 18.1177 4.54189 18.119 4.65804L18.125 7.39956L12.4817 2.28806C12.3166 2.13874 12.0677 2.13743 11.9004 2.28426L0.148258 12.6355C-0.00190184 12.7674 -0.0431572 12.9832 0.0482703 13.161C0.138509 13.3376 0.337652 13.4321 0.531683 13.3879L3.14385 12.7982V20.854C3.14135 20.9243 3.14004 21.2876 3.40303 21.5607C3.51966 21.6807 3.72855 21.8249 4.06514 21.8249C4.69312 21.8249 9.89402 21.8185 9.89402 21.8185C10.1353 21.8185 10.3293 21.6231 10.3298 21.3827L10.3365 16.5665C10.3323 16.5104 10.3425 16.3679 10.4004 16.3044C10.4395 16.2627 10.5233 16.2529 10.5855 16.2529H13.0053C13.1138 16.2529 13.2606 16.2704 13.3359 16.3486C13.4189 16.4337 13.4176 16.5818 13.4163 16.6047L13.4052 21.3673C13.4052 21.4826 13.4503 21.5936 13.5325 21.6761C13.6141 21.7578 13.7265 21.8047 13.8413 21.8047H19.5485C19.9365 21.8047 20.1748 21.6408 20.305 21.5042C20.6092 21.1876 20.599 20.7537 20.5973 20.7238V12.6667L23.4639 13.3372C23.6593 13.3836 23.8571 13.2909 23.9503 13.1151C24.0428 12.9394 24.0037 12.7236 23.8556 12.5896ZM18.9922 5.09283H20.3971V9.45673L18.999 8.19042L18.9922 5.09283ZM20.2602 11.6922C20.1316 11.6616 19.9938 11.6922 19.8904 11.7752C19.7866 11.8577 19.7253 11.9838 19.7253 12.1169V20.7349C19.7253 20.7817 19.7083 20.868 19.6755 20.9017C19.6487 20.9281 19.5849 20.9315 19.5482 20.9315H14.278L14.2874 16.6361C14.2912 16.5838 14.3133 16.117 13.9772 15.7562C13.816 15.5856 13.5185 15.3813 13.0046 15.3813H10.5848C10.1504 15.3813 9.89164 15.5664 9.75123 15.7212C9.4521 16.0527 9.45722 16.4969 9.46482 16.6216L9.45805 20.9472C8.19435 20.9485 4.58148 20.9532 4.06442 20.9532C4.04873 20.9532 4.03886 20.9523 4.03256 20.9523C4.03173 20.9523 4.03042 20.9523 4.02959 20.9523C4.0215 20.9349 4.01556 20.9017 4.01556 20.872V12.2532C4.01556 12.1208 3.95433 11.9953 3.85137 11.9123C3.74758 11.8298 3.6118 11.7996 3.48328 11.8277L2.0051 12.1613L12.1838 3.19616L18.1267 8.57825V8.60416H18.1547L22.0199 12.1052L20.2602 11.6922Z"
          fill={color} strokeWidth={stroke} 
        />
      </g>
      <defs>
        <clipPath id="clip0_42_56">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Home;