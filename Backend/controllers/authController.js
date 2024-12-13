import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";
import Randomstring from "randomstring";
import contactUsModel from "../models/contactUsModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }

    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        // address: user.address,
        // role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// sendResetPasswordMail
const sendResetPasswordMail = (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.mailHost,
      port: process.env.mailPort,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.emailUser,
        pass: process.env.emailPassword,
      },
    });

    const mailOptions = {
      from: process.env.emailUser,
      to: email,
      subject: "For Reset Password",
      html:
        "<p> Hii " +
        name +
        ', Please copy the link and <a href="http://localhost:5000/api/v1/auth/reset-password?token=' +
        token +
        '">reset your password</a></p>',
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail has been sent:- ", info.response);
      }
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

//forgotPasswordController
export const forgotPasswordController = async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await userModel.findOne({ email: email });
    if (userData) {
      const randomString = Randomstring.generate();
      const data = await userModel.updateOne(
        { email: email },
        { $set: { token: randomString } }
      );
      sendResetPasswordMail(userData.name, userData.email, randomString);
      res.status(200).send({ success: true, msg: "check your email inbox" });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "This emsil does not exists." });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

//resetPasswordController
// export const resetPasswordController = async (req, res) => {
//   try {
//     const token = req.query.token;
//     const tokenData = await userModel.findOne({ token: token });
//     if (tokenData) {
//       const password = req.body.password;
//       const newPassword = await hashPassword(password);
//       const userData = await userModel.findByIdAndUpdate(
//         { _id: tokenData._id },
//         { $set: { password: newPassword, token: "" } },
//         { new: true }
//       );
//       res.status(200).send({
//         success: true,
//         msg: "User Password has been reset",
//         data: userData,
//       });
//     } else {
//       res
//         .status(200)
//         .send({ success: true, msg: "This link has been expired" });
//     }
//   } catch (error) {
//     res.status(400).send({ success: false, msg: error.message });
//   }
// };

// verify user for forgot password time
export const resetPasswordController = async (req, res) => {
  const { id, token } = req.params;

  try {
    const validuser = await userModel.findOne({ _id: id, verifytoken: token });

    const verifyToken = jwt.verify(token, keysecret);

    console.log(verifyToken);

    if (validuser && verifyToken._id) {
      res.status(201).json({ status: 201, validuser });
    } else {
      res.status(401).json({ status: 401, message: "user not exist" });
    }
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};

// change password

export const changePasswordController = async (req, res) => {
  const { id, token } = req.params;

  const { password } = req.body;

  try {
    const validuser = await userModel.findOne({ _id: id, verifytoken: token });

    const verifyToken = jwt.verify(token, keysecret);

    if (validuser && verifyToken._id) {
      const newpassword = await hashPassword(password);

      const setnewuserpass = await userModel.findByIdAndUpdate(
        { _id: id },
        { password: newpassword }
      );

      setnewuserpass.save();
      res.status(201).json({ status: 201, setnewuserpass });
    } else {
      res.status(401).json({ status: 401, message: "user not exist" });
    }
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};

export const contactUsController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!message) {
      return res.send({ message: "Message is Required" });
    }

    //save
    const contactUsInfo = await new contactUsModel({
      name,
      email,
      message,
    }).save();

    res.status(201).send({
      success: true,
      message: "Contact Us information received successfully",
      contactUsInfo,
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in processing contact us information",
      error,
    });
  }
};

// resetPasswordController
// export const resetPasswordController = async (req, res) => {
//   try {
//     const token = req.query.token;

//     if (!token) {
//       return res
//         .status(400)
//         .json({ success: false, msg: "Token not provided" });
//     }

//     const tokenData = await userModel.findOne({ token: token });

//     if (tokenData) {
//       const password = req.body.password;

//       if (!password) {
//         return res
//           .status(400)
//           .json({ success: false, msg: "Password not provided" });
//       }

//       const newPassword = await hashPassword(password);

//       const userData = await userModel.findByIdAndUpdate(
//         { _id: tokenData._id },
//         { $set: { password: newPassword, token: "" } },
//         { new: true }
//       );

//       res.status(200).json({
//         success: true,
//         msg: "User Password has been reset",
//         data: userData,
//       });
//     } else {
//       res
//         .status(200)
//         .json({ success: false, msg: "This link has been expired" });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, msg: error.message });
//   }
// };
//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
