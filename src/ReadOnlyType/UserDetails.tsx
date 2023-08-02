import React from "react";

interface User {
  readonly _id: string;
  name: string;
  email: string;
  isActive: Boolean;
  cardDetails?: number;
}

let myUser: User = {
  _id: "12345",
  name: "pranay",
  email: "pra@gmail.com",
  isActive: true,
};
myUser.name = "kalpesh"; 

interface cardNumber {
  cardNumber: string;
}

interface cardDate {
  cardDate: Date;
}
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
