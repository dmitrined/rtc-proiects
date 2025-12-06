import muskAvatar from "./img/musk.jpg";
import trumpAvatar from "./img/trump.jpg";
import bezosAvatar from "./img/bezos.jpg";

export interface Profile {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  occupation: string;
  hobby: string;
}

export const musk: Profile = {
  avatarUrl: muskAvatar,
  firstName: "Elon",
  lastName: "Musk",
  occupation: "Entrepreneur, CEO of Tesla, SpaceX, and owner of X (Twitter)",
  hobby: "Mars Colonization",
};

export const trump: Profile = {
  avatarUrl: trumpAvatar,
  firstName: "Donald",
  lastName: "Trump",
  occupation: "Businessman (Real Estate), 45th U.S. President",
  hobby: "Golf",
};

export const bezos: Profile = {
  avatarUrl: bezosAvatar,
  firstName: "Jeff",
  lastName: "Bezos",
  occupation: "Entrepreneur, Founder of Amazon and Blue Origin",
  hobby: "Space Exploration",
};
