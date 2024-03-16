interface IOrderItem {
    isLong: boolean;
    price: string;
    amount: string;
    profit: string;
}
export const OrderItem = ({ isLong, price, amount, profit } : IOrderItem) => {
    return (
        <div className="flex flex-col gap-1 p-4 border-b border-[#ffffff1a]">
            <div className="flex gap-1 items-center">
                <div className="text-white text-base">
                    AXS /
                    <span className="text-[#9ca3af]">USDT</span>
                </div>
                <div className={`py-1 px-3 text-xs text-white rounded ${isLong ? "bg-[#55af72]" : "bg-[#dd5350]"}`}>{isLong ? "Giao dịch mua một phút" : "Giao dịch bán một phút"}</div>
            </div>
            <div className="flex">
                <div className="flex-1 flex flex-col gap-1">
                    <span className="text-sm text-[#888]">Giá thanh toán</span>
                    <span className={`text-xs ${isLong ? "text-[#55af72]" : "text-[#dd5350]"}`}>{price}</span>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <span className="text-sm text-[#888]">Số tiền</span>
                    <span className="text-xs text-white">{amount} USDT</span>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <span className="text-sm text-[#888]">Lợi nhuận</span>
                    <span className="text-xs text-[#f7a600]">{profit} USDT</span>
                </div>
            </div>
        </div>
    )
}