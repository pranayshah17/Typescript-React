import React from "react";

type user = {
  name: string;
  age: number;
  intrest: string[];
  settings: userSetting;
  dob: Date;
  password: string;
};

type userSetting = {
  themeColor: string;
  sendNotification: boolean;
  trackLocation: boolean;
};

type UserBasicInfo = Pick<user, "name" | "age">;

export const UserPick: React.FC = () => {
  const dummyUser: UserBasicInfo = {
    name: "pranay",
    age: 35,
  };
  return (
    <div>
      <h2>User Basic Info</h2>
      <p>Name: {dummyUser.name}</p>
      <p>Age: {dummyUser.age}</p>
    </div>
  );
};
