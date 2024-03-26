/* eslint-disable react/jsx-key */
"use client";

import { BackIcon } from "@/assets/icons/BackIcon";
import { NextIcon } from "@/assets/icons/NextIcon";
import { GoBack } from "@/components/layouts/GoBack";
import { OrderItemHistory } from "@/components/order.tsx/OrderItemHistory";
import { tradeService } from "@/services/TradeService";
import { getStaticURL } from "@/utils/constants";
import { t } from "i18next";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const OrderPage = () => {
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
      const response = await tradeService.getOrders({
        limit,
        offset,
      });
      if (response.success) {
        setOrderHistory(response.data.rows);
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
      <GoBack title={t("order.title")} />
      {orderHistory.length > 0 ? (
        <div className="flex flex-col gap-4 bg-[#000000]">
          {orderHistory.map((item: any, index: number) => {
            return (
              <Fragment key={index}>
                <OrderItemHistory
                  key={index}
                  id={item.id}
                  isLong={item.position === "long"}
                  price={item.orderValue}
                  amount={item.amount}
                  profit={
                    item.isWin ? (item.amount * item.betPercentage) / 100 : 0
                  }
                  timeoutInMinutes={item.timeoutInMinutes}
                  endAt={item.endAt}
                  token={item.pairName.replace("usdt", "").toUpperCase()}
                  isWin={item.isWin}
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
        <div className="flex flex-col items-center p-4">
          <Image
            src={`${getStaticURL()}/assets/images/empty.svg`}
            alt={t("order.noData")}
            width={100}
            height={100}
            className="w-80 h-80"
          />
          <span className="text-base text-[#737373]">{t("order.noData")}</span>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
