import React from "react";

const Download = () => {
  return (
    <>
      <div className="w-[100%] md:w-[80%] p-5 md:p-0  md:pl-10 lg:pl-0">
        <h4 className="text-main py-2 text-[20px]">
          Build and download your iOS and Android app here.{" "}
          <span className="text-main2"> Learn More</span>
        </h4>
        <div className="flex flex-col md:flex-row">
          <div className="py-7 w-full lg:w-2/4 grid sm:justify-center md:justify-start">
            <h3 className="text-lg font-semibold">Android</h3>
            <div className=" w-80 flex justify-between md:w-full items-center">
              <h4 className="text-main py-5 w-80 text-[20px]">
                Upgrade subscription to download your Android app.
              </h4>
              <svg
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5007 66.4606C27.5007 67.6762 27.0178 68.842 26.1582 69.7015C25.2987 70.5611 24.1329 71.044 22.9173 71.044C21.7017 71.044 20.536 70.5611 19.6764 69.7015C18.8169 68.842 18.334 67.6762 18.334 66.4606V45.8356C18.334 44.62 18.8169 43.4542 19.6764 42.5947C20.536 41.7351 21.7017 41.2523 22.9173 41.2523C24.1329 41.2523 25.2987 41.7351 26.1582 42.5947C27.0178 43.4542 27.5007 44.62 27.5007 45.8356V66.4606ZM91.6673 66.4606C91.6673 67.6762 91.1845 68.842 90.3249 69.7015C89.4654 70.5611 88.2996 71.044 87.084 71.044C85.8684 71.044 84.7026 70.5611 83.8431 69.7015C82.9836 68.842 82.5007 67.6762 82.5007 66.4606V45.8356C82.5007 44.62 82.9836 43.4542 83.8431 42.5947C84.7026 41.7351 85.8684 41.2523 87.084 41.2523C88.2996 41.2523 89.4654 41.7351 90.3249 42.5947C91.1845 43.4542 91.6673 44.62 91.6673 45.8356V66.4606ZM50.4173 91.6667C50.4173 92.8823 49.9344 94.0481 49.0749 94.9076C48.2154 95.7672 47.0496 96.25 45.834 96.25C44.6184 96.25 43.4526 95.7672 42.5931 94.9076C41.7335 94.0481 41.2507 92.8823 41.2507 91.6667V71.0417C41.2507 69.8261 41.7335 68.6603 42.5931 67.8008C43.4526 66.9412 44.6184 66.4583 45.834 66.4583C47.0496 66.4583 48.2154 66.9412 49.0749 67.8008C49.9344 68.6603 50.4173 69.8261 50.4173 71.0417V91.6667ZM68.7507 91.6667C68.7507 92.8823 68.2678 94.0481 67.4082 94.9076C66.5487 95.7672 65.3829 96.25 64.1673 96.25C62.9518 96.25 61.786 95.7672 60.9264 94.9076C60.0669 94.0481 59.584 92.8823 59.584 91.6667V71.0417C59.584 69.8261 60.0669 68.6603 60.9264 67.8008C61.786 66.9412 62.9518 66.4583 64.1673 66.4583C65.3829 66.4583 66.5487 66.9412 67.4082 67.8008C68.2678 68.6603 68.7507 69.8261 68.7507 71.0417V91.6667Z"
                  fill="#7CB342"
                />
                <path
                  d="M32.084 41.2523V75.625C32.084 76.8406 32.5669 78.0064 33.4264 78.8659C34.286 79.7255 35.4517 80.2083 36.6673 80.2083H73.334C74.5496 80.2083 75.7154 79.7255 76.5749 78.8659C77.4345 78.0064 77.9173 76.8406 77.9173 75.625V41.2523H32.084ZM55.0007 18.3333C41.2507 18.3333 32.8746 26.6865 32.084 36.6667H77.9173C77.1244 26.6865 68.7507 18.3333 55.0007 18.3333ZM45.834 31.1621C45.2262 31.1621 44.6433 30.9207 44.2135 30.4909C43.7838 30.0611 43.5423 29.4782 43.5423 28.8704C43.5423 28.2626 43.7838 27.6797 44.2135 27.25C44.6433 26.8202 45.2262 26.5788 45.834 26.5788C46.4418 26.5788 47.0247 26.8202 47.4544 27.25C47.8842 27.6797 48.1257 28.2626 48.1257 28.8704C48.1257 29.4782 47.8842 30.0611 47.4544 30.4909C47.0247 30.9207 46.4418 31.1621 45.834 31.1621ZM64.1673 31.1621C63.5595 31.1621 62.9767 30.9207 62.5469 30.4909C62.1171 30.0611 61.8757 29.4782 61.8757 28.8704C61.8757 28.2626 62.1171 27.6797 62.5469 27.25C62.9767 26.8202 63.5595 26.5788 64.1673 26.5788C64.7751 26.5788 65.358 26.8202 65.7878 27.25C66.2176 27.6797 66.459 28.2626 66.459 28.8704C66.459 29.4782 66.2176 30.0611 65.7878 30.4909C65.358 30.9207 64.7751 31.1621 64.1673 31.1621Z"
                  fill="#7CB342"
                />
                <path
                  d="M68.75 16.0417L64.9321 21.7685M41.25 16.0417L44.3048 20.8129"
                  stroke="#7CB342"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <ul className="mt-4">
              <li className=" mb-10">
                <i
                  className="fa-regular fa-circle-check"
                  style={{ color: "#4caf50" }}
                />
                <span className="text-main ml-3">Email Verified</span>
              </li>
              <li className=" mb-10">
                <i
                  className="fa-regular fa-circle-check opacity-60"
                  style={{ color: "#363b3e" }}
                />
                <span className="text-main ml-3">Appearance</span>
              </li>
              <li className=" mb-10">
                <i
                  className="fa-regular fa-circle-check opacity-60"
                  style={{ color: "#363b3e" }}
                />
                <span className="text-main ml-3">Connectivity</span>
              </li>
              <li className=" mb-8">
                <i
                //   className="fa-regular fa-circle-check opacity-60"
                //   style={{ color: "#363b3e" }}
                />
                <span className="text-main ml-3"></span>
              </li>
            </ul>
            <button className="text-white bg-main2 rounded w-32 h-8 mt-2">
              Proceed
            </button>
            <div className="w-full md:w-2/4 pt-8 flex items-center md:flex-col">
              <div className="mr-4 sm:ml-0 sm:mr-0 flex items-center md:w-full md:mb-5 mt-6">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.209 10.2084V24.7917M5.83398 11.6667V23.3334M14.584 10.2084C14.584 9.43481 14.8913 8.69294 15.4383 8.14596C15.9852 7.59898 16.7271 7.29169 17.5006 7.29169H26.2506C27.0242 7.29169 27.7661 7.59898 28.313 8.14596C28.86 8.69294 29.1673 9.43481 29.1673 10.2084V24.7917C29.1673 25.5652 28.86 26.3071 28.313 26.8541C27.7661 27.4011 27.0242 27.7084 26.2506 27.7084H17.5006C16.7271 27.7084 15.9852 27.4011 15.4383 26.8541C14.8913 26.3071 14.584 25.5652 14.584 24.7917V10.2084Z"
                    stroke="#5F6368"
                    stroke-opacity="0.57"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h4 className=" text-main">Versions</h4>
              </div>
              <div className="md:w-full w-36 flex">
                <div className="flex w-full ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6097 18.99L13.5297 9.90997C14.4597 7.56997 13.9797 4.80997 12.0897 2.90997C9.78972 0.609971 6.20972 0.399971 3.65972 2.25997L7.49972 6.10997L6.07972 7.51997L2.24972 3.68997C0.389717 6.22997 0.599717 9.81997 2.89972 12.11C4.75972 13.97 7.46972 14.46 9.78972 13.59L18.8997 22.7C19.2897 23.09 19.9197 23.09 20.3097 22.7L22.6097 20.4C23.0097 20.02 23.0097 19.39 22.6097 18.99ZM19.6097 20.59L10.1497 11.13C9.53972 11.58 8.85972 11.85 8.14972 11.95C6.78972 12.15 5.35972 11.74 4.31972 10.7C3.36972 9.75997 2.92972 8.49997 2.99972 7.25997L6.08972 10.35L10.3297 6.10997L7.23972 3.01997C8.47972 2.94997 9.72972 3.38997 10.6797 4.32997C11.1912 4.84058 11.5712 5.46762 11.7872 6.15733C12.0032 6.84703 12.0486 7.57883 11.9197 8.28997C11.7949 9.00661 11.4923 9.68049 11.0397 10.25L20.4897 19.7L19.6097 20.59Z"
                      fill="#5F6368"
                      fill-opacity="0.57"
                    />
                  </svg>

                  <h4 className=" text-main mr-1">Built </h4>
                  <span>:</span>
                </div>
                <div className="flex w-full items-center ml-4 sm:ml-0">
                  <h4 className="ml-2 text-main">Draft</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="py-7 w-full lg:w-2/4 grid sm:justify-center md:justify-start">
            <h3 className="text-lg font-semibold">iOS</h3>
            <div className=" w-80 flex justify-between md:w-full items-center">
              <h4 className="text-main py-5 w-80 text-[20px]">
                Upgrade subscription to download your Android app.
              </h4>
              <svg
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.1465 92.95C73.6548 97.3042 68.7507 96.6167 64.0298 94.5542C59.034 92.4458 54.4507 92.3542 49.1798 94.5542C42.5798 97.3958 39.0965 96.5708 35.1548 92.95C12.7882 69.8958 16.0882 34.7875 41.4798 33.5042C47.6673 33.825 51.9757 36.8958 55.5965 37.1708C61.0048 36.0708 66.184 32.9083 71.959 33.3208C78.8798 33.8708 84.1048 36.6208 87.5423 41.5708C73.2423 50.1417 76.634 68.9792 89.7423 74.25C87.1298 81.125 83.7382 87.9542 78.1007 92.9958L78.1465 92.95ZM55.1382 33.2292C54.4507 23.0083 62.7465 14.575 72.2798 13.75C73.609 25.575 61.5548 34.375 55.1382 33.2292Z"
                  fill="black"
                />
              </svg>
            </div>
            <ul>
              <li className=" mb-10">
                <i
                  className="fa-regular fa-circle-check"
                  style={{ color: "#4caf50" }}
                />
                <span className="text-main ml-3">Email Verified</span>
              </li>
              <li className=" mb-10">
                <i
                  className="fa-regular fa-circle-check opacity-60"
                  style={{ color: "#363b3e" }}
                />
                <span className="text-main ml-3">Appearance</span>
              </li>
              <li className=" mb-10">
                <i
                  className="fa-regular fa-circle-check opacity-60"
                  style={{ color: "#363b3e" }}
                />
                <span className="text-main ml-3">Connectivity</span>
              </li>
              <li className=" mb-8">
                <i
                  className="fa-regular fa-circle-check opacity-60"
                  style={{ color: "#363b3e" }}
                />
                <span className="text-main ml-3">Certificate</span>
              </li>
            </ul>
            <button className="text-white bg-main2 rounded w-32 h-8 mt-2">
              Proceed
            </button>
            <div className="w-full md:w-2/4 pt-8 flex items-center md:flex-col">
              <div className="mr-4 sm:ml-0 sm:mr-0 flex items-center md:w-full md:mb-5 mt-6">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.209 10.2084V24.7917M5.83398 11.6667V23.3334M14.584 10.2084C14.584 9.43481 14.8913 8.69294 15.4383 8.14596C15.9852 7.59898 16.7271 7.29169 17.5006 7.29169H26.2506C27.0242 7.29169 27.7661 7.59898 28.313 8.14596C28.86 8.69294 29.1673 9.43481 29.1673 10.2084V24.7917C29.1673 25.5652 28.86 26.3071 28.313 26.8541C27.7661 27.4011 27.0242 27.7084 26.2506 27.7084H17.5006C16.7271 27.7084 15.9852 27.4011 15.4383 26.8541C14.8913 26.3071 14.584 25.5652 14.584 24.7917V10.2084Z"
                    stroke="#5F6368"
                    stroke-opacity="0.57"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h4 className=" text-main">Versions</h4>
              </div>
              <div className="md:w-full w-36 flex">
                <div className="flex w-full ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6097 18.99L13.5297 9.90997C14.4597 7.56997 13.9797 4.80997 12.0897 2.90997C9.78972 0.609971 6.20972 0.399971 3.65972 2.25997L7.49972 6.10997L6.07972 7.51997L2.24972 3.68997C0.389717 6.22997 0.599717 9.81997 2.89972 12.11C4.75972 13.97 7.46972 14.46 9.78972 13.59L18.8997 22.7C19.2897 23.09 19.9197 23.09 20.3097 22.7L22.6097 20.4C23.0097 20.02 23.0097 19.39 22.6097 18.99ZM19.6097 20.59L10.1497 11.13C9.53972 11.58 8.85972 11.85 8.14972 11.95C6.78972 12.15 5.35972 11.74 4.31972 10.7C3.36972 9.75997 2.92972 8.49997 2.99972 7.25997L6.08972 10.35L10.3297 6.10997L7.23972 3.01997C8.47972 2.94997 9.72972 3.38997 10.6797 4.32997C11.1912 4.84058 11.5712 5.46762 11.7872 6.15733C12.0032 6.84703 12.0486 7.57883 11.9197 8.28997C11.7949 9.00661 11.4923 9.68049 11.0397 10.25L20.4897 19.7L19.6097 20.59Z"
                      fill="#5F6368"
                      fill-opacity="0.57"
                    />
                  </svg>

                  <h4 className=" text-main mr-1">Built </h4>
                  <span>:</span>
                </div>
                <div className="flex w-full items-center ml-4 sm:ml-0">
                  <h4 className="ml-2 text-main">Draft</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
