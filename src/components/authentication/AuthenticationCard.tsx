import i18next from "i18next";



export const AuthenticationCard = () => {
    return (
        <div>
            {/* <h2>{title}</h2> */}
            <div>
                <span>{i18next.t("authentication.rightsAndInterests")}</span>
            </div>
        </div>
    )
}