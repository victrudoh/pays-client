"use client";

import MainLayout from "@/app/(main)/layout";
import React, { useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useGeneralContext } from "@/context/GenralContext";
import Link from "next/link";
import Spinner from "@/components/spinner/Spinner";
import Image from "next/image";
import logo from "@/assets/imgs/vouchers/voucher_img.png";

const Page = () => {
  const {
    user,
    allUserVouchers,
    fetchVouchersLoading,
    paymentLInksByUser,
    setFetchPaymentLinksLoading,
  }: any = useGeneralContext();
  console.log("🚀 ~ Page ~ user:", user);
  const router = useRouter();
  const checkToken = async () => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      router.push(`/auth/login`);
      return <MainLayout />;
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center pb-2 border-b-[0.3px]">
          <div className="flex flex-col justify-start gap-2 font-geistsans mb-4">
            <span className="font-bold text-4xl text-brand-dark">
              Hello, {user?.name}
            </span>
            <span className="font-normal text-sm text-brand-grayish">
              Welcome to Pays, Redeem your card vouchers{" "}
            </span>
          </div>
        </div>
        <div className="bg-brand-white rounded-lg p-8 flex gap-6 justify-evenly items-center">
          {/* Item */}
          <div className="h-[107px] flex flex-col items-start justify-start gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                fill="#F5F5F5"
              />
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                stroke="#E9E9E9"
              />
              <path
                d="M11.6957 23.9286V18.3751H10V16.9922H11.6957V15.2203H10V13.8373H11.6957V8.5H13.9565L16.0217 13.8373H18.587V8.5H20.3043V13.8373H22V15.2203H20.3043V16.9922H22V18.3751H20.3043V23.9286H18.0217L15.9565 18.3751H13.3913V23.9286H11.6957ZM13.3913 16.9922H15.4348L14.7826 15.2203H13.3478L13.3913 16.9922ZM18.587 20.8818H18.6739L18.6087 18.3751H17.6957L18.587 20.8818ZM13.3478 13.8373H14.2609L13.3478 11.1579H13.2609L13.3478 13.8373ZM17.1739 16.9922H18.6304L18.587 15.2203H16.5217L17.1739 16.9922Z"
                fill="#1F0047"
              />
            </svg>
            <span className="font-normal text-base text-brand-grayish font-geistsans">
              Account Balance
            </span>
            <span className="font-medium text-4xl font-geistsans text-brand-dark">
              ₦{(user?.walletBalance || 0).toLocaleString("en-NG")}
            </span>
          </div>
          {/* divider */}
          <span className="h-[107px] bg-brand-ash w-[1px]"></span>
          {/* item */}
          <div className="h-[107px] flex flex-col items-start justify-start gap-2">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="31"
                height="31"
                rx="15.5"
                fill="#F5F5F5"
              />
              <rect
                x="0.5"
                y="1"
                width="31"
                height="31"
                rx="15.5"
                stroke="#E9E9E9"
              />
              <path
                d="M10 16.25V22.25C10 22.6478 10.158 23.0294 10.4393 23.3107C10.7206 23.592 11.1022 23.75 11.5 23.75H20.5C20.8978 23.75 21.2794 23.592 21.5607 23.3107C21.842 23.0294 22 22.6478 22 22.25V16.25"
                stroke="#1F0047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 12.125C16 11.4288 15.7234 10.7611 15.2312 10.2688C14.7389 9.77656 14.0712 9.5 13.375 9.5C12.8777 9.5 12.4008 9.69754 12.0492 10.0492C11.6975 10.4008 11.5 10.8777 11.5 11.375C11.5 11.8723 11.6975 12.3492 12.0492 12.7008C12.4008 13.0525 12.8777 13.25 13.375 13.25H16M16 12.125V13.25M16 12.125C16 11.4288 16.2766 10.7611 16.7688 10.2688C17.2611 9.77656 17.9288 9.5 18.625 9.5C19.1223 9.5 19.5992 9.69754 19.9508 10.0492C20.3025 10.4008 20.5 10.8777 20.5 11.375C20.5 11.6212 20.4515 11.865 20.3573 12.0925C20.263 12.32 20.1249 12.5267 19.9508 12.7008C19.7767 12.8749 19.57 13.013 19.3425 13.1073C19.115 13.2015 18.8712 13.25 18.625 13.25H16"
                stroke="#1F0047"
                strokeLinejoin="round"
              />
              <path
                d="M16 16.25V23.75M9.25 13.25H22.75V16.25H9.25V13.25Z"
                stroke="#1F0047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-normal text-base text-brand-grayish font-geistsans">
              Total Vouchers
            </span>
            <span className="font-medium text-4xl font-geistsans text-brand-dark">
              {(user?.totalVouchers || 0).toLocaleString("en-NG")}
            </span>
          </div>
          {/* divider */}
          <span className="h-[107px] bg-brand-ash w-[1px]"></span>
          {/* Item */}
          <div className="h-[107px] flex flex-col items-start justify-start gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                fill="#F5F5F5"
              />
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                stroke="#E9E9E9"
              />
              <path
                d="M11.6957 23.9286V18.3751H10V16.9922H11.6957V15.2203H10V13.8373H11.6957V8.5H13.9565L16.0217 13.8373H18.587V8.5H20.3043V13.8373H22V15.2203H20.3043V16.9922H22V18.3751H20.3043V23.9286H18.0217L15.9565 18.3751H13.3913V23.9286H11.6957ZM13.3913 16.9922H15.4348L14.7826 15.2203H13.3478L13.3913 16.9922ZM18.587 20.8818H18.6739L18.6087 18.3751H17.6957L18.587 20.8818ZM13.3478 13.8373H14.2609L13.3478 11.1579H13.2609L13.3478 13.8373ZM17.1739 16.9922H18.6304L18.587 15.2203H16.5217L17.1739 16.9922Z"
                fill="#1F0047"
              />
            </svg>
            <span className="font-normal text-base text-brand-grayish font-geistsans">
              Amount Cashed
            </span>
            <span className="font-medium text-4xl font-geistsans text-brand-dark">
              ₦{(user?.totalAmountCashed || 0).toLocaleString("en-NG")}
            </span>
          </div>
          {/* divider */}
          <span className="h-[107px] bg-brand-ash w-[1px]"></span>
          {/* item */}
          <div className="h-[107px] flex flex-col items-start justify-start gap-2">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="31"
                height="31"
                rx="15.5"
                fill="#F5F5F5"
              />
              <rect
                x="0.5"
                y="1"
                width="31"
                height="31"
                rx="15.5"
                stroke="#E9E9E9"
              />
              <path
                d="M10 16.25V22.25C10 22.6478 10.158 23.0294 10.4393 23.3107C10.7206 23.592 11.1022 23.75 11.5 23.75H20.5C20.8978 23.75 21.2794 23.592 21.5607 23.3107C21.842 23.0294 22 22.6478 22 22.25V16.25"
                stroke="#1F0047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 12.125C16 11.4288 15.7234 10.7611 15.2312 10.2688C14.7389 9.77656 14.0712 9.5 13.375 9.5C12.8777 9.5 12.4008 9.69754 12.0492 10.0492C11.6975 10.4008 11.5 10.8777 11.5 11.375C11.5 11.8723 11.6975 12.3492 12.0492 12.7008C12.4008 13.0525 12.8777 13.25 13.375 13.25H16M16 12.125V13.25M16 12.125C16 11.4288 16.2766 10.7611 16.7688 10.2688C17.2611 9.77656 17.9288 9.5 18.625 9.5C19.1223 9.5 19.5992 9.69754 19.9508 10.0492C20.3025 10.4008 20.5 10.8777 20.5 11.375C20.5 11.6212 20.4515 11.865 20.3573 12.0925C20.263 12.32 20.1249 12.5267 19.9508 12.7008C19.7767 12.8749 19.57 13.013 19.3425 13.1073C19.115 13.2015 18.8712 13.25 18.625 13.25H16"
                stroke="#1F0047"
                strokeLinejoin="round"
              />
              <path
                d="M16 16.25V23.75M9.25 13.25H22.75V16.25H9.25V13.25Z"
                stroke="#1F0047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-normal text-base text-brand-grayish font-geistsans">
              Active Vouchers
            </span>
            <span className="font-medium text-4xl font-geistsans text-brand-dark">
              {(user?.activeVouchers || 0).toLocaleString("en-NG")}
            </span>
          </div>
          {/* divider */}
          <span className="h-[107px] bg-brand-ash w-[1px]"></span>
          {/* item */}
          <div className="h-[107px] flex flex-col items-start justify-start gap-2">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="31"
                height="31"
                rx="15.5"
                fill="#F5F5F5"
              />
              <rect
                x="0.5"
                y="1"
                width="31"
                height="31"
                rx="15.5"
                stroke="#E9E9E9"
              />
              <path
                d="M10 16.25V22.25C10 22.6478 10.158 23.0294 10.4393 23.3107C10.7206 23.592 11.1022 23.75 11.5 23.75H20.5C20.8978 23.75 21.2794 23.592 21.5607 23.3107C21.842 23.0294 22 22.6478 22 22.25V16.25"
                stroke="#1F0047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 12.125C16 11.4288 15.7234 10.7611 15.2312 10.2688C14.7389 9.77656 14.0712 9.5 13.375 9.5C12.8777 9.5 12.4008 9.69754 12.0492 10.0492C11.6975 10.4008 11.5 10.8777 11.5 11.375C11.5 11.8723 11.6975 12.3492 12.0492 12.7008C12.4008 13.0525 12.8777 13.25 13.375 13.25H16M16 12.125V13.25M16 12.125C16 11.4288 16.2766 10.7611 16.7688 10.2688C17.2611 9.77656 17.9288 9.5 18.625 9.5C19.1223 9.5 19.5992 9.69754 19.9508 10.0492C20.3025 10.4008 20.5 10.8777 20.5 11.375C20.5 11.6212 20.4515 11.865 20.3573 12.0925C20.263 12.32 20.1249 12.5267 19.9508 12.7008C19.7767 12.8749 19.57 13.013 19.3425 13.1073C19.115 13.2015 18.8712 13.25 18.625 13.25H16"
                stroke="#1F0047"
                strokeLinejoin="round"
              />
              <path
                d="M16 16.25V23.75M9.25 13.25H22.75V16.25H9.25V13.25Z"
                stroke="#1F0047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-normal text-base text-brand-grayish font-geistsans">
              Cashed vouchers
            </span>
            <span className="font-medium text-4xl font-geistsans text-brand-dark">
              {(user?.cashedVouchers || 0).toLocaleString("en-NG")}
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 mb-4">
          {/* left */}
          <div className="flex flex-col gap-3 w-[50%]">
            {/* left top */}
            <div className="flex items-center justify-between w-full rounded-lg bg-brand-white p-2">
              <span className="font-bold text-sm text-brand-dark font-geistsa">
                Recent Vouchers
              </span>
              <Link
                href={"/dashboard/vouchers"}
                className="transition-fx flex items-center gap-2 border-x-brand-grayish border-[1px] rounded-3xl font-medium text-sm text-brand-grayish p-2 hover:bg-brand-main hover:text-brand-white"
              >
                See All{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.74334 1.90736H1.41729C1.16437 1.90736 0.921813 1.80689 0.742972 1.62804C0.564131 1.44919 0.463659 1.20661 0.463659 0.953683C0.463659 0.700752 0.564131 0.45818 0.742972 0.27933C0.921813 0.100481 1.16437 4.31787e-06 1.41729 4.31787e-06H9.04636C9.1717 -0.000373419 9.29588 0.0240364 9.41175 0.0718294C9.52762 0.119623 9.6329 0.189856 9.72152 0.278488C9.81015 0.367121 9.88038 0.472404 9.92817 0.58828C9.97596 0.704156 10.0004 0.828339 10 0.953683V8.58312C10 8.83605 9.89952 9.07862 9.72068 9.25747C9.54184 9.43632 9.29928 9.5368 9.04636 9.5368C8.79344 9.5368 8.55088 9.43632 8.37204 9.25747C8.1932 9.07862 8.09273 8.83605 8.09273 8.58312V3.25587L1.62805 9.72086C1.44911 9.89968 1.20646 10.0001 0.95349 10C0.700519 9.99991 0.457945 9.89933 0.279131 9.72038C0.100317 9.54143 -8.93582e-05 9.29877 5.96727e-08 9.04579C8.94775e-05 8.79281 0.100667 8.55022 0.279608 8.3714L6.74334 1.90736Z"
                    fill="#9D9D9D"
                  />
                </svg>
              </Link>
            </div>
            {/* left bottom  */}
            <div className="flex flex-col items-center justify-between w-full rounded-lg">
              {allUserVouchers?.length > 0 ? (
                allUserVouchers.slice(0, 3).map((item: any, i: number) => (
                  <div
                    key={i}
                    className="border-[0.3px] rounded-xl p-4 w-full bg-brand-white mb-2"
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-4 w-[70%]">
                        {/* left */}
                        <div className="flex gap-4 pr-4 w-[50%]">
                          {item.thumbnail ? (
                            <Image
                              src={item?.thumbnail}
                              alt="Login"
                              width={80}
                              height={80}
                              priority
                              className="rounded-lg"
                            />
                          ) : (
                            <Image
                              src={logo}
                              alt="Login"
                              width={80}
                              height={80}
                              priority
                              className="rounded-lg"
                            />
                          )}
                          <div className="flex flex-col justify-center gap-2">
                            <Link
                              href={`/dashboard/vouchers/${item._id}`}
                              className="font-geistsans text-2xl font-medium capitalize"
                            >
                              {item.title}
                            </Link>
                            {/* middle */}
                            <div className="flex justify-evenly gap-8 items-center px-4 border-l-[0.3px] min-w-[50%]">
                              <div className="flex flex-col items-center justify-center gap-2">
                                <span className="text-brand-grayish font-normal text-xs font-geistsans">
                                  Amount
                                </span>
                                <span className="text-brand-grayish font-normal text-xs font-geistsans border-[0.3px] rounded-xl px-[6px] py-[2px]">
                                  ₦{item.amountPerVoucher}
                                </span>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-2">
                                <span className="w-max  text-brand-grayish font-normal text-xs font-geistsans">
                                  Cashed Vouchers
                                </span>
                                <span className="text-brand-grayish font-normal text-xs w-max font-geistsans border-[0.3px] rounded-xl px-[6px] py-[2px]">
                                  {item.vouchersCashed} /{" "}
                                  {item.totalNumberOfVouchers} Vouchers
                                </span>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-2">
                                <span className="text-brand-grayish font-normal text-xs font-geistsans">
                                  Description of Voucher
                                </span>
                                <span className="text-brand-grayish font-normal text-xs w-max font-geistsans border-[0.3px] rounded-xl px-[6px] py-[2px]">
                                  {item.description.slice(0, 40)}{" "}
                                  {item.description.length > 40 && "..."}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {fetchVouchersLoading ? (
                    <div className="w-full flex items-center justify-center mx-auto">
                      <span className="w-[150px] p-3 px-8 h-[44px] flex items-center justify-center text-brand-white">
                        <Spinner />
                      </span>
                    </div>
                  ) : (
                    <span className="w-full flex items-center justify-center font-geistsans font-medium text-brand-main text-lg">
                      NO VOUCHER YET
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-3 w-[50%]">
            {/* right top */}
            <div className="flex items-center justify-between w-full rounded-lg bg-brand-white p-2">
              <span className="font-bold text-sm text-brand-dark font-geistsa">
                Payment Links
              </span>
              <Link
                href={"/dashboard/payments"}
                className="transition-fx flex items-center gap-2 border-x-brand-grayish border-[1px] rounded-3xl font-medium text-sm text-brand-grayish p-2 hover:bg-brand-main hover:text-brand-white"
              >
                See All{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.74334 1.90736H1.41729C1.16437 1.90736 0.921813 1.80689 0.742972 1.62804C0.564131 1.44919 0.463659 1.20661 0.463659 0.953683C0.463659 0.700752 0.564131 0.45818 0.742972 0.27933C0.921813 0.100481 1.16437 4.31787e-06 1.41729 4.31787e-06H9.04636C9.1717 -0.000373419 9.29588 0.0240364 9.41175 0.0718294C9.52762 0.119623 9.6329 0.189856 9.72152 0.278488C9.81015 0.367121 9.88038 0.472404 9.92817 0.58828C9.97596 0.704156 10.0004 0.828339 10 0.953683V8.58312C10 8.83605 9.89952 9.07862 9.72068 9.25747C9.54184 9.43632 9.29928 9.5368 9.04636 9.5368C8.79344 9.5368 8.55088 9.43632 8.37204 9.25747C8.1932 9.07862 8.09273 8.83605 8.09273 8.58312V3.25587L1.62805 9.72086C1.44911 9.89968 1.20646 10.0001 0.95349 10C0.700519 9.99991 0.457945 9.89933 0.279131 9.72038C0.100317 9.54143 -8.93582e-05 9.29877 5.96727e-08 9.04579C8.94775e-05 8.79281 0.100667 8.55022 0.279608 8.3714L6.74334 1.90736Z"
                    fill="#9D9D9D"
                  />
                </svg>
              </Link>
            </div>
            {/* right bottom  */}
            <div className="flex flex-col items-center justify-between w-full rounded-lg bg-brand-white p-2">
              {paymentLInksByUser?.length > 0 ? (
                <table className="text-center p-2 rounded-lg w-full overflow-y-auto">
                  <thead className="divide-y divide-gray-200 font-bold text-sm text-brand-grayish py-2 px-4 mb-2">
                    <tr className="rounded-lg">
                      <th className="py-2">S/N</th>
                      <th className="py-2">Title</th>
                      <th className="py-2">Corresponding Link</th>
                      {/* <th className="py-2"></th> */}
                    </tr>
                  </thead>
                  <tbody className="font-normal text-sm text-brand-grayish/80">
                    {paymentLInksByUser
                      .slice(0, 8)
                      .map((item: any, i: number) => (
                        <tr key={i} className="mb-4 rounded-lg">
                          <td className="py-3">{i + 1}</td>
                          <td className="py-3 capitalize">{item.title}</td>
                          <td className="py-3 capitalize">{item.link}</td>
                          {/* <td className="py-3 capitalize">
                          <select
                            name="bankCode"
                            id="bankCode"
                            // onChange={handleSelectChange}
                            className="p-2 border border-brand-grayish/15 rounded-lg text-brand-grayish bg-transparent outline-brand-main/40 font-geistsans font-normal text-xs"
                          >
                            <option className="text-lg">...</option>
                            <option className="capitalize" value="view">
                              view
                            </option>
                            <option className="capitalize" value="delete">
                              delete
                            </option>
                          </select>
                        </td> */}
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <>
                  {setFetchPaymentLinksLoading ? (
                    <div className="w-full flex items-center justify-center mx-auto">
                      <span className="w-[150px] p-3 px-8 h-[44px] flex items-center justify-center text-brand-white">
                        <Spinner />
                      </span>
                    </div>
                  ) : (
                    <span className="w-full flex items-center justify-center font-geistsans font-medium text-brand-main text-lg">
                      NO PAYMENT LINKS YET
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
