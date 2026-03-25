const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const User = require("./schemas/users");
const Role = require("./schemas/roles");

// Helper function to generate a random 16-character string
function generateRandomPassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Ensure you replace "user" and "pass" with your valid Mailtrap credentials
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b03a36fea19f64",
    pass: "f7ac59575ee92f",
  },
});

const listUsers = [
  { username: "user01", email: "user01@haha.com" },
  { username: "user02", email: "user02@haha.com" },
  { username: "user03", email: "user03@haha.com" },
  { username: "user04", email: "user04@haha.com" },
  { username: "user05", email: "user05@haha.com" },
  { username: "user06", email: "user06@haha.com" },
  { username: "user07", email: "user07@haha.com" },
  { username: "user08", email: "user08@haha.com" },
  { username: "user09", email: "user09@haha.com" },
  { username: "user10", email: "user10@haha.com" },
  { username: "user11", email: "user11@haha.com" },
  { username: "user12", email: "user12@haha.com" },
  { username: "user13", email: "user13@haha.com" },
  { username: "user14", email: "user14@haha.com" },
  { username: "user15", email: "user15@haha.com" },
  { username: "user16", email: "user16@haha.com" },
  { username: "user17", email: "user17@haha.com" },
  { username: "user18", email: "user18@haha.com" },
  { username: "user19", email: "user19@haha.com" },
  { username: "user20", email: "user20@haha.com" },
  { username: "user21", email: "user21@haha.com" },
  { username: "user22", email: "user22@haha.com" },
  { username: "user23", email: "user23@haha.com" },
  { username: "user24", email: "user24@haha.com" },
  { username: "user25", email: "user25@haha.com" },
  { username: "user26", email: "user26@haha.com" },
  { username: "user27", email: "user27@haha.com" },
  { username: "user28", email: "user28@haha.com" },
  { username: "user29", email: "user29@haha.com" },
  { username: "user30", email: "user30@haha.com" },
  { username: "user31", email: "user31@haha.com" },
  { username: "user32", email: "user32@haha.com" },
  { username: "user33", email: "user33@haha.com" },
  { username: "user34", email: "user34@haha.com" },
  { username: "user35", email: "user35@haha.com" },
  { username: "user36", email: "user36@haha.com" },
  { username: "user37", email: "user37@haha.com" },
  { username: "user38", email: "user38@haha.com" },
  { username: "user39", email: "user39@haha.com" },
  { username: "user40", email: "user40@haha.com" },
  { username: "user41", email: "user41@haha.com" },
  { username: "user42", email: "user42@haha.com" },
  { username: "user43", email: "user43@haha.com" },
  { username: "user44", email: "user44@haha.com" },
  { username: "user45", email: "user45@haha.com" },
  { username: "user46", email: "user46@haha.com" },
  { username: "user47", email: "user47@haha.com" },
  { username: "user48", email: "user48@haha.com" },
  { username: "user49", email: "user49@haha.com" },
  { username: "user50", email: "user50@haha.com" },
  { username: "user51", email: "user51@haha.com" },
  { username: "user52", email: "user52@haha.com" },
  { username: "user53", email: "user53@haha.com" },
  { username: "user54", email: "user54@haha.com" },
  { username: "user55", email: "user55@haha.com" },
  { username: "user56", email: "user56@haha.com" },
  { username: "user57", email: "user57@haha.com" },
  { username: "user58", email: "user58@haha.com" },
  { username: "user59", email: "user59@haha.com" },
  { username: "user60", email: "user60@haha.com" },
  { username: "user61", email: "user61@haha.com" },
  { username: "user62", email: "user62@haha.com" },
  { username: "user63", email: "user63@haha.com" },
  { username: "user64", email: "user64@haha.com" },
  { username: "user65", email: "user65@haha.com" },
  { username: "user66", email: "user66@haha.com" },
  { username: "user67", email: "user67@haha.com" },
  { username: "user68", email: "user68@haha.com" },
  { username: "user69", email: "user69@haha.com" },
  { username: "user70", email: "user70@haha.com" },
  { username: "user71", email: "user71@haha.com" },
  { username: "user72", email: "user72@haha.com" },
  { username: "user73", email: "user73@haha.com" },
  { username: "user74", email: "user74@haha.com" },
  { username: "user75", email: "user75@haha.com" },
  { username: "user76", email: "user76@haha.com" },
  { username: "user77", email: "user77@haha.com" },
  { username: "user78", email: "user78@haha.com" },
  { username: "user79", email: "user79@haha.com" },
  { username: "user80", email: "user80@haha.com" },
  { username: "user81", email: "user81@haha.com" },
  { username: "user82", email: "user82@haha.com" },
  { username: "user83", email: "user83@haha.com" },
  { username: "user84", email: "user84@haha.com" },
  { username: "user85", email: "user85@haha.com" },
  { username: "user86", email: "user86@haha.com" },
  { username: "user87", email: "user87@haha.com" },
  { username: "user88", email: "user88@haha.com" },
  { username: "user89", email: "user89@haha.com" },
  { username: "user90", email: "user90@haha.com" },
  { username: "user91", email: "user91@haha.com" },
  { username: "user92", email: "user92@haha.com" },
  { username: "user93", email: "user93@haha.com" },
  { username: "user94", email: "user94@haha.com" },
  { username: "user95", email: "user95@haha.com" },
  { username: "user96", email: "user96@haha.com" },
  { username: "user97", email: "user97@haha.com" },
  { username: "user98", email: "user98@haha.com" },
  { username: "user99", email: "user99@haha.com" },
];

async function importUsers() {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/NNPTUD-S3");
    console.log("Connected to MongoDB.");

    // 2. Setup standard user role
    let userRole = await Role.findOne({ name: "user" });
    if (!userRole) {
      console.log("Role 'user' not found, creating one...");
      userRole = new Role({ name: "user", description: "Standard user" });
      await userRole.save();
    }

    // 3. Loop through users and save them
    let count = 0;
    for (const userData of listUsers) {
      await User.deleteOne({ username: userData.username });

      const randomPassword = generateRandomPassword();

      const newUser = new User({
        username: userData.username,
        email: userData.email,
        password: randomPassword, // pre-save hook in your schema will handle hashing
        role: userRole._id,
      });

      await newUser.save();
      console.log(`Imported: ${userData.username} - Password generated.`);

      // 4. Send email via Mailtrap
      try {
        await transporter.sendMail({
          from: '"Admin" <admin@haha.com>',
          to: userData.email,
          subject: "Your new account has been created!",
          text: `Hi ${userData.username},\n\nYour account has been created successfully.\nHere is your generated password: ${randomPassword}\n\nPlease change it when you log in.`,
          html: `<h3>Hi ${userData.username},</h3><p>Your account has been created successfully.</p><p>Here is your generated password: <strong>${randomPassword}</strong></p><p>Please change it when you log in.</p>`,
        });
        console.log(`Password emailed to ${userData.email}`);
        count++;
      } catch (err) {
        console.error(`Error sending email to ${userData.email}:`, err.message);
      }
    }

    console.log(`\nImport complete. ${count} new users added and emailed.`);
    process.exit(0);

  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

importUsers();
