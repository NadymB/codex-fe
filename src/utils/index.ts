import { COUNTRIES } from "./constants";

export const debounce = (fn: Function, delay: number) => {
  let timer: any;
  return function (...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};




export function generateRandomString(length:number) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const firstNames = ["John", "Emma", "Michael", "Emily", "William", "Sophia", "James", "Olivia", "Benjamin", "Isabella", "Alexander", "Ava", "Daniel", "Mia", "Matthew", "Charlotte"];

export function generateRandomEmail() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLocalPart = Math.random().toString(36).substring(7); 
  const email = `${randomFirstName.toLowerCase()}${Math.floor(1000 + Math.random() * 9000)}@${randomLocalPart}.com`;
  return hideEmail(email);
}

export function generateRandomPhoneNumber() {
  const randomCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  const countryCode = randomCountry.phone;
  let phoneNumber = `${countryCode}${Math.floor(100000000 + Math.random() * 900000000)}`;

  return hidePhoneNumber(phoneNumber);
}
export function hideEmail(email:string) {
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');
  const username = email.substring(0, atIndex);
  const domain = email.substring(atIndex, dotIndex);
  const maskedUsername = username.substring(0, 5) + '*'.repeat(username.length - 5);
  const maskedDomain = domain.substring(0, 3) + '*'.repeat(domain.length - 3);
  return `${maskedUsername}${maskedDomain}`;
}

export function hidePhoneNumber(phoneNumber:string) {
  return phoneNumber.substring(0, 4) + '*'.repeat(phoneNumber.length - 4) + phoneNumber.substring(phoneNumber.length - 2);
}