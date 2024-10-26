// /* eslint-disable no-undef */
// import clientPromise from '@/lib/mongodb';
// import { MongoDBAdapter } from '@auth/mongodb-adapter';
// import NextAuth, { getServerSession } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// // Set quyền admin
// const adminEmails = ['tuananhkim555@gmail.com'];

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   callbacks: {
//     session: async ({ session, token, user }) => {
//       // Check if the user is an admin
//       if (adminEmails.includes(session?.user?.email)) {
//         return session;
//       } else {
//         // Return a session object with a flag indicating non-admin status
//         return {
//           ...session,
//           isAdmin: true, // Đặt quyền admin
//         };
//       }
//     },
//   },
// };

// export default NextAuth(authOptions);

// export async function isAdminRequest(req, res) {
//   const session = await getServerSession(req, res, authOptions);
//   if (!session || !adminEmails.includes(session?.user?.email)) {
//     res.status(403).json({ error: 'Not an admin' });
//     return;
//   }
// }

//DISABLE ADMIN CHECK
/* eslint-disable no-undef */ 
import clientPromise from '@/lib/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth, { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: async ({ session, token, user }) => {
      return {
        ...session,
        isAdmin: true, // Đặt quyền admin cho tất cả người dùng
      };
    },
  },
};

export default NextAuth(authOptions);

export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: 'Not authenticated' });
    return false;
  }
  return true;
}