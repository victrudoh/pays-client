"use client";

import MainLayout from "@/app/(main)/layout";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/imgs/vouchers/voucher_img.png";
import { useGeneralContext } from "@/context/GenralContext";
import Link from "next/link";
import Spinner from "@/components/spinner/Spinner";

const Page = () => {
  const {
    user,
    allUserTransactions,
    fetchVouchersLoading,
    setTransactionDetails,
  }: any = useGeneralContext();
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

  useEffect(() => {
    // Extract query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const tx_ref = urlParams.get("tx_ref") as any;
    const transaction_id = urlParams.get("transaction_id") as any;
    if (tx_ref && transaction_id) {
      setTransactionDetails((item: any) => ({
        ...item,
        tx_ref: tx_ref,
        transaction_id: transaction_id,
      }));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Top */}
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
              No. of Transactions
            </span>
            <span className="font-medium text-4xl font-geistsans text-brand-dark">
              {(allUserTransactions?.length || 0).toLocaleString("en-NG")}
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
              Remaining Vouchers
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
        <div className="bg-brand-white rounded-lg p-4 flex  gap-6 justify-between items-center">
          <span className="font-normal text-base text-brand-grayish">
            Fund & Withdraw your wallet with ease.
          </span>
          <Link
            href={"/dashboard/transactions/new"}
            className="transition-fx flex items-center gap-2 p-2 px-4 rounded-3xl bg-brand-main text-brand-white font-geistsans text-base font-normal cursor-pointer hover:bg-brand-main/50"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0C6.12902 0 6.25276 0.0512546 6.344 0.142489C6.43523 0.233722 6.48649 0.357462 6.48649 0.486486V5.51351H11.5135C11.6425 5.51351 11.7663 5.56477 11.8575 5.656C11.9487 5.74724 12 5.87098 12 6C12 6.12902 11.9487 6.25276 11.8575 6.344C11.7663 6.43523 11.6425 6.48649 11.5135 6.48649H6.48649V11.5135C6.48649 11.6425 6.43523 11.7663 6.344 11.8575C6.25276 11.9487 6.12902 12 6 12C5.87098 12 5.74724 11.9487 5.656 11.8575C5.56477 11.7663 5.51351 11.6425 5.51351 11.5135V6.48649H0.486486C0.357462 6.48649 0.233722 6.43523 0.142489 6.344C0.0512546 6.25276 0 6.12902 0 6C0 5.87098 0.0512546 5.74724 0.142489 5.656C0.233722 5.56477 0.357462 5.51351 0.486486 5.51351H5.51351V0.486486C5.51351 0.357462 5.56477 0.233722 5.656 0.142489C5.74724 0.0512546 5.87098 0 6 0Z"
                fill="white"
              />
            </svg>
            New Transaction
          </Link>
          {/* <div className="bg-brand-white rounded-lg p-8 flex  gap-6 justify-between items-center">
            <span className="font-normal text-base text-brand-grayish">
              20002933883
            </span>
            <span className="font-normal text-base text-brand-grayish">
              Lugaton Styles (Globus Bank)
            </span>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col justify-start gap-4 my-6">
        <div className="w-full flex justify-between items-center">
          <span className="font-geistmono font-normal text-2xl">
            Your Transactions
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 p-2 px-4 font-geistsans font-normal text-sm rounded-3xl bg-brand-white text-brand-main">
              ₦ Amount{" "}
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.67188 1.00586L4.67187 4.00586L1.67187 1.00586"
                  stroke="#61666B"
                  strokeWidth="1.49937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2 p-2 px-4 font-geistsans font-normal text-sm rounded-3xl bg-brand-white text-brand-main">
              Status{" "}
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.67188 1.00586L4.67187 4.00586L1.67187 1.00586"
                  stroke="#61666B"
                  strokeWidth="1.49937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-brand-white rounded-lg p-8 flex flex-col gap-6 justify-start mb-8">
          {/* voucher */}
          {allUserTransactions?.length > 0 ? (
            <table className="text-center p-2 rounded-lg w-full overflow-y-auto">
              <thead className="divide-y divide-gray-200 font-bold text-sm text-brand-grayish py-2 px-4 mb-2">
                <tr className="rounded-lg">
                  <th className="py-2">S/N</th>
                  <th className="py-2">Transaction Reference</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Type</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Date</th>
                </tr>
              </thead>
              <tbody className="font-normal text-sm text-brand-grayish/80">
                {allUserTransactions.map((item: any, i: number) => (
                  <tr key={i} className="mb-4 rounded-lg">
                    <td className="py-3">{i + 1}</td>
                    <td className="py-3 capitalize">
                      {item.transactionReference}
                    </td>
                    <td className="py-3 capitalize">{item.type}</td>
                    <td className="py-3 capitalize">
                      {item.amount} {item.currency}
                    </td>
                    <td className="py-3 capitalize">
                      <span
                        className={`p-2 rounded-lg ${
                          item.status === "successful"
                            ? "text-green-500 bg-green-200/80"
                            : "text-red-500 bg-red-200/80"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 capitalize">
                      {item.createdAt.slice(0, 10)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                  NO TRANSACTION YET
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
