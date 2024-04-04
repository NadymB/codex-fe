/* eslint-disable react/jsx-key */
"use client";

import { BackIcon } from "@/assets/icons/BackIcon";
import { NextIcon } from "@/assets/icons/NextIcon";
import { BillHistory } from "@/components/Billing/BillHistory";
import { GoBack } from "@/components/layouts/GoBack";
import { useAuth } from "@/hooks/useAuth";
import { PaginationQuery } from "@/models/Transaction";
import { transactionService } from "@/services/TransactionService";
import { getStaticURL } from "@/utils/constants";
import { t } from "i18next";
import { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const OrderPage = () => {
  const { tradeCurrenty } = useAuth();

  const [{ offset, limit }, setPaginations] = useState<{
    offset: number;
    limit: number;
  }>({
    offset: 0,
    limit: 20,
  });
  const [bill, setBill] = useState([]);
  const [total, setTotal] = useState(0);
  const getListTransaction = async (pagination: PaginationQuery) => {
    try {
      const response = await transactionService.getListTransactions(pagination);
      if (response.success && response.data) {
        setBill(response.data.items);
        setTotal(response.data.totalCount);
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    getListTransaction({offset: 0, limit: 20})
  }, [])
  const handlePageClick = async (selectedItem: { selected: number }) => {
    const newOffset = selectedItem.selected * limit;
    await getListTransaction({limit, offset: newOffset});
  };
  useEffect(() => {
    getListTransaction({limit, offset});
  }, []);
  return (
      <div className="min-h-screen bg-[#000000]">
        <GoBack title={t("bill.title")} />
        {bill.length > 0 ? (
          <div className="flex flex-col gap-4 bg-[#000000]">
            {bill.map((item: any, index: number) => {
              return (
                <Fragment key={index}>
                  <BillHistory
                    key={index}
                    id={item.refCode}
                    amount={item.amount}
                    fee={item.fee ? item.fee : 0}
                    createdAt={item.createdAt}
                    status={item.status}
                    action={item.type}
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
            <img
              src={`${getStaticURL()}/assets/images/empty.svg`}
              alt={t("order.noData")}
              width={100}
              height={100}
              className="w-80 h-80"
            />
            <span className="text-base text-[#737373]">
              {t("order.noData")}
            </span>
          </div>
        )}
      </div>
  );
};

export default OrderPage;
