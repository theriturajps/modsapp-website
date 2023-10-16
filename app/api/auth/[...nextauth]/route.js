import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email === "jsmith@gmail.com" &&
          credentials.password === "password"
        ) {
          return { email: credentials.email };
        }
        return null;
        //   const user = {
        //     email: credentials?.email,
        //   };
        //   if (user) {
        //     return user;
        //   } else {
        //     return null;
        //   }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
