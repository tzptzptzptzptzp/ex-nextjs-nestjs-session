import Cookie from "js-cookie";

export const signOut = () => {
  Cookie.remove("authorization");
};
