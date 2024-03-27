import { model, Schema, Types } from "mongoose";

export const EmployeeSchema = new Schema(
  {
    first_name: {
      type: Schema.Types.String,
      //   ref: "first_name",
      required: true,
    },
    last_name: {
      type: Schema.Types.String,
      ref: "last_name",
      required: true,
    },
    employee_id: {
      type: Schema.Types.Number,
      ref: "employee_id",
      required: true,
    },
    salary: {
      type: Schema.Types.Number,
      ref: "salary",
      required: true,
    },
    department: {
      type: Schema.Types.String,
      ref: "department",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const EmployeeModel = model("employees", EmployeeSchema);