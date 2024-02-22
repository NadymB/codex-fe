export interface IRightInterests {
    title: string;
    content: string;
}

export const RightInterestItem = ({title, content}: IRightInterests) => {
    return (
        <div className="flex justify-between">
            <span className="text-sm text-[#888]">{title}</span>
            <span className="text-sm text-white">{content}</span>
        </div>
    )
}