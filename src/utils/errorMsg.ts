import { ERR_CODE } from "./constants";

export const errorMsg = (errorCode: string) => {
  switch (errorCode) {
    case ERR_CODE.NOT_FOUND:
      return "notFound";
    case ERR_CODE.INTERNAL_SERVER_ERROR:
      return "internalServerError";
    case ERR_CODE.CONFIRMATION_TOO_LOW:
      return "confirmationTooLow";
    case ERR_CODE.EMAIL_ALREADY_EXISTS:
      return "emailAlreadyExists";
    case ERR_CODE.INVALID_CAPTCHA_TOKEN:
      return "invalidCaptchaToken";
    case ERR_CODE.INVALID_CURRENCY:
      return "invalidCurrency";
    case ERR_CODE.INVALID_DEPOSIT_ADDRESS:
      return "invalidDepositAddress";
    case ERR_CODE.INVALID_EMAIL_FORMAT:
      return "invalidEmailFormat";
    case ERR_CODE.INVALID_LOGIN_MODE:
      return "invalidLoginMode";
    case ERR_CODE.INVALID_PASSWORD_FORMAT:
      return "invalidPasswordFormat";
    case ERR_CODE.INVALID_PURCHASE_PRICE:
      return "invalidPurchasePrice";
    case ERR_CODE.INVALID_REGISTER_METHOD:
      return "invalidRegisterMethod";
    case ERR_CODE.INVALID_SIGNATURE:
      return "invalidSignature";
    case ERR_CODE.INVALID_TX_FUNCTION:
      return "invalidTxFunction";
    case ERR_CODE.INVALID_USERNAME_FORMAT:
      return "invalidUsernameFormat";
    case ERR_CODE.INVALID_WITHDRAW_TYPE:
      return "invalidWithdrawType";
    case ERR_CODE.NOT_ENOUGH_CERTIFICATE:
      return "notEnoughCertificate";
    case ERR_CODE.NOT_ENOUGH_WITHDRAWAL_ACCOUNT_INFORMATION:
      return "notEnoughWithdrawAccountInformation";
    case ERR_CODE.NOT_TX_OWNER:
      return "notTxOwner";
    case ERR_CODE.PERMISSION_DENIED:
      return "permissionDenied";
    case ERR_CODE.PHONE_NUMBER_ALREADY_EXISTS:
      return "phoneNumberAlreadyExists";
    case ERR_CODE.PREVIOUS_VERIFY_REQUEST_NOT_APPROVED:
      return "previousVerifyRequestNotApproved";
    case ERR_CODE.PROOF_OF_ADDRESS_IS_REQUIRED:
      return "proofOfAddressIsRequired";
    case ERR_CODE.REQUIRE_EMAIL_OR_PHONE_NUMBER:
      return "requiredEmailOrPhoneNumber";
    case ERR_CODE.TRADE_COMPLETED:
      return "tradeCompleted";
    case ERR_CODE.TRADE_SETTLED:
      return "tradeSettled";
    case ERR_CODE.TX_HASH_USED:
      return "txHashUsed";
    case ERR_CODE.UNAUTHORIZED:
      return "unauthorized";
    case ERR_CODE.USERNAME_ALREADY_EXISTS:
      return "usernameAlreadyExists";
    case ERR_CODE.USER_LOCKED:
      return "userLocked";
    case ERR_CODE.USER_NOT_FOUND:
      return "userNotFound";
    case ERR_CODE.INVALID_PIN:
        return "invalidPin";
    case ERR_CODE.USER_PIN_NOT_SET:
      return "userPinNotSet";
    case ERR_CODE.PIN_ALREADY_SET:
      return "pinAlreadySet"
    default:
      return "unknownError";
  }
};
