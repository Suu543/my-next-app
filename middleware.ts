// import middleware from "next-auth/middleware";
// export default middleware;

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/users/:id*"],
};
