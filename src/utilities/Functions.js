import axios from "axios";
import localforage from "localforage";
import { matchPath } from "react-router";

export const is_valid_email = (email) => {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
   } else {
      return false;
   }
};

export const is_valid_password = (password) => {
   if (password !== undefined && password.toString().length > 5) return true;
   else return false;
};

export const getInfo = async () => {
   try {
      const res = await axios.post("https://ipinfo.io?token=dad9dae5937021");
      //cookies.set("data", res.data, { path: "/" });
      console.log(res.data);
      localforage.setItem("data", res.data);
      localforage.setItem("ip", res.data.ip);
   } catch (err) {
      console.log("Err: App.js.getInfo " + err);
      return "** Err: Please contact the administrator";
   }
};

export const moneyFormat = (num, sigDigs, doLetters) => {
   var s = num.toString();
   let nn = "";
   for (let i = 0; i <= s.length; i++) {
      if (s[i] !== undefined) {
         if (i < sigDigs) nn += s[i];
         else nn += "0";
      }
   }
   nn = nn.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
   if (doLetters === undefined || doLetters === true) {
      nn.replace(",000,000,000", "B")
         .replace(",000,000", "M")
         .replace(",000", "k");
   }
   if (
      nn[nn.length - 4] === "," &&
      nn[nn.length - 2] === "0" &&
      nn[nn.length - 1] === "0" &&
      doLetters === true
   ) {
      let numLetter = "K";
      if (parseInt(num) > 999999999999) numLetter = "T";
      else if (parseInt(num) > 999999999) numLetter = "B";
      else if (parseInt(num) > 999999) numLetter = "M";
      nn = nn.toString();
      let nn2 = ""; // new number 2
      for (let i = 0; i < nn.length - 4; i++) {
         nn2 += nn[i];
      }
      nn2 += "." + nn[nn.length - 3] + numLetter;
      nn = nn2;
   }
   nn = nn.toString().replace(".00", "").replace(".0", "");

   return nn;
};

export const getRandomInt = (min, max) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const commafy = (str) => {
   const match = `${str}`.match(/^-?\d+(?:\.\d{0,2})?/);
   return !!match?.length ? match[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
};

export const formatNumberK = (number) => {
   const value = Math.abs(number) / 1000;
   return number < 10000 && number > -10000 ? number : value.toFixed(0);
};

export const formatNumberForLabel = (number, noSign = false) => {
   const num = +`${number}`.replaceAll(",", "");
   const value = commafy(formatNumberK(num));
   const sign = noSign ? "" : "$";

   const postfix = number < 10000 && number > -10000 ? "" : "K";

   if (num === 0) return `${sign}0`;
   return num > 0 ? `${sign}${value}${postfix}` : `(${sign}${value}${postfix})`;
};

export const formatNumberWithUnits = (
   num,
   { isPercent = false, isDays = false, isNumPositive = true }
) => {
   const sign = isPercent || isDays ? "" : "$";
   const value = `${sign}${num}${isPercent ? "%" : ""}`;

   return isNumPositive ? `${value}` : `(${value})`;
};

export const formatNumber = (
   num,
   toFixed = 2,
   options = { isPercent: false, isDays: false, withUnits: false }
) => {
   const { isPercent, isDays, withUnits, noSign } = options;
   const removeTrailingZeros = (number) =>
      +number.toFixed(isDays ? 0 : toFixed).toString();

   const postfixes = [
      { number: 1e3, sign: "K" },
      { number: 1e6, sign: "M" },
      { number: 1e9, sign: "B" },
      { number: 1e12, sign: "T" },
      { number: 1e15, sign: "Q" },
   ];

   const number = Math.abs(+num);
   let result;

   if (number < 1e3) {
      result = removeTrailingZeros(number);
   } else {
      postfixes.map((item) => {
         const divided = number / item.number;

         if (divided >= 1e3 || !!result) {
            return;
         } else {
            result = `${removeTrailingZeros(divided)}${item.sign}`;
         }
      });
   }

   return withUnits
      ? formatNumberWithUnits(result, {
           isPercent,
           isDays,
           noSign,
           isNumPositive: num >= 0,
        })
      : result;
};

export const formatNumberInThousands = (number) => {
   if (isNaN(+number)) return number;

   const num = +number / 1000;

   return num < 0 ? 0 : commafy(num.toFixed(0));
};

export const isRoute = (path, exact = false, customRoute = "") => {
   return !!matchPath(customRoute || window.location.pathname, {
      path,
      exact,
      strict: false,
   });
};

export const goTo = (e, path, history) => {
   if (e.preventDefault && e.stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
   }

   if (e.ctrlKey || e.metaKey) {
      window.open(path, "_blank");
      return;
   }

   if (!history || !history.push) return;

   history.push(path, { backURL: window.location.pathname });
};
