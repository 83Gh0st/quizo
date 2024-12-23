import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, type NextAuthOptions, type DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db";

// Augment NextAuth session and JWT types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role?: string; // Example of additional properties
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string;
  }
}

// NextAuth configuration options
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, account }) => {
      // Log account and token information
      console.log('JWT Callback:', token, account);
  
      if (account && token?.email) {
        const db_user = await prisma.user.findFirst({
          where: { email: token.email },
        });
  
        if (db_user) {
          token.id = db_user.id;
        }
      }
  
      return token;
    },
    session: ({ session, token }) => {
      // Log session and token data
      console.log('Session Callback:', session, token);
  
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

// Helper to get server session
export const getAuthSession = () => {
  return getServerSession(authOptions);
};
