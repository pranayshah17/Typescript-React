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

type UserWithoutPassword = Omit<user, "password">;

export const UserOmit: React.FC = () => {
  const dummyUser: UserWithoutPassword = {
    name: "pranay",
    age: 25,
    intrest: ["programming"],
    settings: {
      themeColor: "red",
      sendNotification: true,
      trackLocation: true,
    },
    dob: new Date(),
  };
  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {dummyUser.name}</p>
      <p>Age: {dummyUser.age}</p>
      <p>Theme Color: {dummyUser.settings.themeColor}</p>
      {/* Render other properties from settings */}
    </div>
  );
};
