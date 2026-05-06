import Razorpay from "razorpay";

export const instance = new Razorpay({
    key_id: process.env.KEY_ID!,
    key_secret: process.env.SECRET!,
});

// async function createPlan() {
//     const plan = await instance.plans.create({
//         period: "monthly",
//         interval: 1,
//         item: {
//             name: "Test Plan",
//             amount: 50000,
//             currency: "INR",
//             description: "Testing Razorpay",
//         },
//     });
//     console.log(plan);
// }