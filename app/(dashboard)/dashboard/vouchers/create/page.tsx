"use client";

import React, { useState } from "react";
import { useGeneralContext } from "@/context/GenralContext";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";
// import Image from "next/image";

// import right_img from "@/assets/imgs/vouchers/voucher_right.png";

const Page = () => {
  const router = useRouter();
  const {
    token,
    setOneVoucherId,
    voucherSpecialKey,
    setVoucherSpecialKey,
    createVoucherLoading,
    setCreateVoucherLoading,
  }: any = useGeneralContext();
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    voucherKey: "",
    expiry_date: "",
    amountPerVoucher: "",
    totalNumberOfVouchers: "",
  });
  // const [createVoucherLoading, setCreateVoucherLoading] = useState(false);

  const onchangeHandler = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnail(e.target.files[0]);
    }
  };

  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();
      setCreateVoucherLoading(true);
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("voucherKey", formData.voucherKey);
      data.append("expiry_date", formData.expiry_date);
      data.append("amountPerVoucher", formData.amountPerVoucher);
      data.append("totalNumberOfVouchers", formData.totalNumberOfVouchers);

      if (thumbnail) {
        data.append("thumbnail", thumbnail);
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/utils/voucher/create`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": token,
          },
        }
      );
      setCreateVoucherLoading(false);

      console.log("Response:", response.data);
      setOneVoucherId(response.data.data.voucher._id);
      setOneVoucherId(response.data.data.voucher.specialKey);
      if (response.status === 200) {
        success("Voucher created successfully.");
        router.push(
          `/dashboard/vouchers/create/recipients/${response.data.data.voucher.specialKey}`
        );
      }
    } catch (err: any) {
      setCreateVoucherLoading(false);
      console.log("🚀 ~ onSubmit ~ err:", err);
      error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : err?.response?.data?.error || err?.message
      );
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 justify-start w-full mx-auto">
        {/* breadcumb */}
        <div className="flex items-center gap-2 font-geistsans font-normal text-[10px] text-brand-grayish">
          <Link
            href={"/dashboard/vouchers"}
            className="transition-fx cursor-pointer hover:text-brand-main"
          >
            Voucher
          </Link>{" "}
          <svg
            width="5"
            height="9"
            viewBox="0 0 5 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.61018 3.71009C4.72735 3.8273 4.79317 3.98624 4.79317 4.15197C4.79317 4.3177 4.72735 4.47664 4.61018 4.59384L1.07456 8.12947C1.0169 8.18916 0.947936 8.23678 0.871683 8.26953C0.795431 8.30229 0.713418 8.31953 0.630431 8.32025C0.547444 8.32097 0.465144 8.30516 0.388334 8.27373C0.311524 8.24231 0.241741 8.1959 0.183058 8.13721C0.124375 8.07853 0.077967 8.00875 0.0465414 7.93194C0.0151159 7.85513 -0.000697537 7.77283 2.35982e-05 7.68984C0.000744733 7.60686 0.0179862 7.52484 0.0507418 7.44859C0.0834974 7.37234 0.131111 7.30337 0.190805 7.24572L3.28456 4.15197L0.190805 1.05822C0.0769562 0.940342 0.0139597 0.782465 0.0153837 0.618592C0.0168077 0.454719 0.0825382 0.297962 0.198418 0.182082C0.314298 0.0662015 0.471056 0.000471076 0.634929 -0.000952936C0.798802 -0.00237695 0.956679 0.0606195 1.07456 0.174468L4.61018 3.71009Z"
              fill="#C4C4C4"
            />
          </svg>
          Voucher Creation
        </div>
        <form
          onSubmit={onSubmit}
          className="flex gap-2 items-start justify-between"
        >
          {/* left */}
          <div className="flex flex-col w-max lg:w-[50%]">
            <div className="rounded-xl bg-brand-white p-4 flex flex-col gap-4 justify-start">
              <div className="flex flex-col gap-2 justify-start w-full">
                <div className="p-2 px-4 bg-brand-main text-brand-white font-normal text-xs w-max font-geistsans rounded-2xl">
                  Step 1 of 3
                </div>
                <span className="font-bold font-geistsans text-3xl text-brand-dark">
                  Setup Voucher Details
                </span>
              </div>
              {/* Inputs */}
              <div className="flex flex-col gap-3 justify-start">
                <div className="flex p-4 justify-between items-center border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs">
                  <div className="flex gap-2 items-center">
                    <svg
                      width="28"
                      height="32"
                      viewBox="0 0 28 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.33268 0C1.85992 0 0.666016 1.19391 0.666016 2.66667V29.3333C0.666016 30.8061 1.85992 32 3.33268 32H24.666C26.1388 32 27.3327 30.8061 27.3327 29.3333V0H3.33268ZM27.3327 2.09808e-05V5.33333L21.9993 2.05146e-05L27.3327 2.09808e-05Z"
                        fill="#E2E8F0"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 0V5.33331H27.3333L22 0Z"
                        fill="#94A3B8"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.332 10.667V5.33366H21.9987L27.332 10.667Z"
                        fill="#CBD5E1"
                      />
                    </svg>
                    <div className="flex flex-col gap-1 justify-start">
                      <span className="font-medium text-sm text-brand-grayish">
                        Upload Voucher Image
                      </span>
                      <span className="font-normal text-xs text-brand-grayish">
                        Click here to select Image
                      </span>
                    </div>
                  </div>
                  <input
                    type="file"
                    name="thumbnail"
                    id="thumbnail"
                    onChange={onImageChange}
                    className="px-2 py-[12px] flex items-center justify-center border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs cursor-pointer"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="font-medium text-xs text-gray-500 font-geistsans mb-2">
                    Voucher Title <span className="text-red-400">*</span>
                  </span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter voucher title"
                    onChange={onchangeHandler}
                    className="w-[353px] h-[40px] px-2 py-[12px] border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="font-medium text-xs text-gray-500 font-geistsans mb-2">
                    Voucher Description <span className="text-red-400">*</span>
                  </span>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter a brief description"
                    onChange={onchangeHandler}
                    rows={3}
                    className="w-[353px] px-2 py-[12px] border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs"
                  ></textarea>
                </div>
                <div className="flex flex-col justify-start">
                  <span className="font-medium text-xs text-gray-500 font-geistsans mb-2">
                    Voucher Key <span className="text-red-400">*</span>
                  </span>
                  <input
                    type="text"
                    name="voucherKey"
                    id="voucherKey"
                    placeholder="Enter voucher key"
                    onChange={onchangeHandler}
                    className="w-[353px] h-[40px] px-2 py-[12px] border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="font-medium text-xs text-gray-500 font-geistsans mb-2">
                    Expiry Date <span className="text-red-400">*</span>
                  </span>
                  <input
                    type="date"
                    name="expiry_date"
                    id="expiry_date"
                    placeholder="Enter voucher expiry date"
                    onChange={onchangeHandler}
                    className="w-[353px] h-[40px] px-2 py-[12px] border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col w-max lg:w-[50%]">
            <div className="rounded-t-xl bg-brand-white p-4 flex flex-col gap-4 justify-start">
              <div className="flex flex-col gap-2 justify-start w-full">
                <div className="p-2 px-4 bg-brand-main text-brand-white font-normal text-xs w-max font-geistsans rounded-2xl">
                  Step 2 of 3
                </div>
                <span className="font-bold font-geistsans text-3xl text-brand-dark">
                  Voucher Amount Setup
                </span>
              </div>
              {/* Inputs */}
              <div className="flex flex-col gap-3 justify-start">
                <div className="flex flex-col justify-start">
                  <span className="font-medium text-xs text-gray-500 font-geistsans mb-2">
                    Voucher Amount <span className="text-red-400">*</span>
                  </span>
                  <input
                    type="number"
                    name="amountPerVoucher"
                    id="amountPerVoucher"
                    placeholder="Enter voucher amount"
                    onChange={onchangeHandler}
                    className="w-[353px] h-[40px] px-2 py-[12px] border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="font-medium text-xs text-gray-500 font-geistsans mb-2">
                    Number of Vouchers<span className="text-red-400">*</span>
                  </span>
                  <input
                    type="number"
                    name="totalNumberOfVouchers"
                    id="totalNumberOfVouchers"
                    placeholder="Enter Number of Vouchers"
                    onChange={onchangeHandler}
                    className="w-[353px] h-[40px] px-2 py-[12px] border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs"
                  />
                </div>
              </div>
              {/* Summation part */}
              <div className="flex flex-col gap-2 w-[353px] my-10 font-geistsans">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-xs text-brand-grayish">
                    Sub Total
                  </span>
                  <span className="font-bold text-base text-brand-dark/70">
                    ₦ 27,000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-xs text-brand-grayish">
                    Pays Fee
                  </span>
                  <span className="font-bold text-base text-brand-dark/70">
                    ₦ 100
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-xs text-brand-grayish">
                    Total Amount
                  </span>
                  <span className="font-bold text-base text-brand-dark/70">
                    ₦ 27,100
                  </span>
                </div>
              </div>
            </div>
            {/* bottom buttons */}
            <div className="rounded-b-xl bg-brand-white p-4 flex justify-between items-center border border-brand-grayish/15">
              <Link
                href={"/dashboard/vouchers"}
                className="py-3 px-8 bg-transparent text-[#DE2626] border-[0.3px] border-[#DE2626] font-normal text-base w-max font-geistsans rounded-3xl uppercase cursor-pointer hover:bg-[#DE2626] hover:text-brand-white"
              >
                Back
              </Link>
              {createVoucherLoading ? (
                <span className="w-[150px] p-3 px-8 h-[44px] flex items-center justify-center text-brand-white">
                  <Spinner />
                </span>
              ) : (
                <button
                  type="submit"
                  className="p-3 px-8 bg-brand-main text-brand-white font-normal text-base w-max font-geistsans rounded-3xl uppercase cursor-pointer hover:bg-brand-main/25"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
          {/* <div className="hidden lg:flex">
            <Image src={right_img} alt="right" />
          </div> */}
        </form>
      </div>
    </>
  );
};

export default Page;
