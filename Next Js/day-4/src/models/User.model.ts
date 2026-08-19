import { IUser } from "@/types/user.types";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Email is required"],
      minlength: [6, "Minimum 6 character required"],
    },
    mobile: {
      type: String,
      minlength: [10, "Minimum 10 numbers required"],
      maxlength: [10, "Maximum 10 numbers required"],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", function (): void {
  if (!this.isModified("password")) return;

  this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.comparePass = function (canidatePassword: string): boolean {
  return bcrypt.compareSync(canidatePassword, this.password);
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
