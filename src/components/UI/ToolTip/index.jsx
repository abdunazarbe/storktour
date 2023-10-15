

import { Tooltip, Typography } from "@material-tailwind/react";

const index = () => {
    return (
        <Tooltip
            placement="left"
            className="bg-white px-4 py-3"
            content={
                <div className="w-[250px]">
                    <Typography  className="font-['InterMedium'] text-[#1E1E1E] text-[14px]">
                        Здравствуйте, мы в сети, вы можете оставить нам сообщени
                    </Typography>

                </div>
            }
        >
            <div>
                <svg xmlns="http://www.w3.org/2000/svg"  className="w-[25px] h-[25px] md:w-[42px] md:h-[42px]" viewBox="0 0 42 42" fill="none">
                    <path d="M36.7668 32.1978C39.2703 29.9666 40.6879 26.9925 40.6879 23.9063C40.6879 20.6263 39.1524 17.5589 36.3643 15.2684C33.6507 13.0399 30.0589 11.8125 26.25 11.8125C22.4411 11.8125 18.8493 13.0399 16.1361 15.2686C13.348 17.5589 11.8125 20.6263 11.8125 23.9063C11.8125 27.1862 13.348 30.2537 16.1361 32.5442C18.8493 34.7728 22.4411 36.0002 26.25 36.0002C26.7575 36.0002 27.2682 35.9778 27.7746 35.9332L28.6397 36.6831C31.62 39.2656 35.4314 40.6874 39.375 40.6875H40.6875V37.8938L40.3031 37.5094C38.7867 35.9885 37.585 34.1836 36.7668 32.1978ZM30.3589 34.6992L28.623 33.1947L28.0442 33.2656C27.4489 33.3384 26.8497 33.375 26.25 33.375C19.7367 33.375 14.4375 29.1273 14.4375 23.9063C14.4375 18.6852 19.7367 14.4375 26.25 14.4375C32.7633 14.4375 38.0625 18.6852 38.0625 23.9063C38.0625 26.5075 36.7648 28.9359 34.4083 30.7442L33.6524 31.3243L34.0012 32.3115C34.716 34.3278 35.7667 36.2087 37.1087 37.8746C34.6094 37.4575 32.2737 36.3587 30.3589 34.6992Z" fill="white" />
                    <path d="M4.93705 26.043C6.16565 24.4877 7.13029 22.7412 7.79239 20.8731L8.13857 19.8908L7.3833 19.3111C5.16124 17.606 3.9375 15.3175 3.9375 12.8672C3.9375 7.94333 8.94214 3.9375 15.0938 3.9375C19.6192 3.9375 23.5239 6.10559 25.2719 9.21211C25.5965 9.19636 25.9225 9.1875 26.25 9.1875C26.9077 9.1875 27.5594 9.21941 28.2051 9.28323C27.5296 7.53309 26.3564 5.93545 24.7434 4.61065C22.1543 2.48382 18.7277 1.3125 15.0938 1.3125C11.4598 1.3125 8.03316 2.48382 5.44392 4.61065C2.77971 6.79916 1.3125 9.73137 1.3125 12.8672C1.3125 15.8039 2.65387 18.6336 5.02441 20.7621C4.25081 22.6238 3.12043 24.3161 1.69698 25.7438L1.3125 26.1282V28.875H2.625C5.05207 28.8747 7.44575 28.3095 9.61661 27.2241C9.37856 26.3219 9.23909 25.3965 9.20063 24.4642C7.88302 25.2364 6.43983 25.7708 4.93705 26.043Z" fill="white" />
                </svg>
            </div>
        </Tooltip>
    );
};

export default index;