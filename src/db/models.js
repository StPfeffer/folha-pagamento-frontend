import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    cnpj: {
      type: String,
      required: true,
      unique: true,
      min: 14,
      max: 14,
    },
    name: {
      type: String,
      required: true,
    },
    fantasyName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    taxRegime: {
      type: String,
    },
    stateRegistration: {
      type: String,
      min: 14,
      max: 14,
    },
    municipalRegistration: {
      type: String,
      min: 11,
      max: 11,
    }
  },
  { timestamps: true }
)

const collaboratorSchema = new mongoose.Schema(
  
)

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 30
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
)

export const Collaborator = mongoose.models.Collaborator || mongoose.model("Collaborator", collaboratorSchema);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Company = mongoose.models.Company || mongoose.model("Company", companySchema);