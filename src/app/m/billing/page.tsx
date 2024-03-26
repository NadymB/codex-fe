/* eslint-disable react/jsx-key */
"use client";

import { BackIcon } from "@/assets/icons/BackIcon";
import { NextIcon } from "@/assets/icons/NextIcon";
import { BillHistory } from "@/components/Billing/BillHistory";
import { GoBack } from "@/components/layouts/GoBack";
import { OrderItemHistory } from "@/components/order.tsx/OrderItemHistory";
import { useAuth } from "@/hooks/useAuth";
import { tradeService } from "@/services/TradeService";
import { userService } from "@/services/UserService";
import { TRADE_CURRENCY, getStaticURL } from "@/utils/constants";
import { t } from "i18next";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const OrderPage = () => {
  const { currentUser } = useAuth();

  const [{ offset, limit }, setPaginations] = useState<{
    offset: number;
    limit: number;
  }>({
    offset: 0,
    limit: 20,
  });
  const [orderHistory, setOrderHistory] = useState([]);
  const [total, setTotal] = useState(0);
  const getOrderHistory = async (limit = 20, offset = 0) => {
    try {
      console.log(currentUser);
      const response = await userService.getBalanceHistory(TRADE_CURRENCY.USD,{
        limit,
        offset,
      });
      if (response.success) {
        console.log(response);
        setOrderHistory(response.data.items);
        setTotal(response.data.total);
      }

      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const handlePageClick = async (selectedItem: { selected: number }) => {
    const newOffset = selectedItem.selected * limit;
    await getOrderHistory(limit, newOffset);
  };
  useEffect(() => {
    getOrderHistory();
  }, []);
  return (
    <div className="min-h-screen bg-[#000000]">
      <GoBack title={t("bill.title")} />
      {orderHistory.length > 0 ? (
        <div className="flex flex-col gap-4 bg-[#000000]">
          {orderHistory.map((item: any, index: number) => {
            return (
              <Fragment key={index}>
                <BillHistory
                  key={index}
                  id={item.id}
                  amount={item.amount}
                 
                />
              </Fragment>
            );
          })}
          {Math.ceil(total / limit) > 0 && (
            <div className="Pagination relative">
              <ReactPaginate
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                activeClassName={"page-active"}
                breakLabel="..."
                nextLabel={<NextIcon />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={Math.ceil(total / limit)}
                previousLabel={<BackIcon />}
                // renderOnZeroPageCount={true}
              />
            </div>
          )}
        </div>
      ) : (
        <BillHistory
                  key={1}
                  id={"s"}
                  amount={"1000"}
                  isSuccess={true}
                  createdAt=""
                 
                />
        // <div className="flex flex-col items-center p-4">
        //   <Image
        //     src={`${getStaticURL()}/assets/images/empty.svg`}
        //     alt={t("order.noData")}
        //     width={100}
        //     height={100}
        //     className="w-80 h-80"
        //   />
        //   <span className="text-base text-[#737373]">{t("order.noData")}</span>
        // </div>
      )}
    </div>
  );
};

export default OrderPage;
