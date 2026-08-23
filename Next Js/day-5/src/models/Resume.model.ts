import { IResume } from "@/types/resume.types";
import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema<IResume>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    summary: {
      type: String,
      default: "",
    },
    personalInfo: {
      type: {
        fullname: String,
        email: String,
        mobile: String,
        location: String,
        github: String,
        linkedIn: String,
        portfolio: String,
      },
      default: {},
    },
    workExperience: {
      type: [
        {
          company: String,
          positiob: String,
          startDate: String,
          endDate: String,
          description: String,
        },
      ],
      default: [],
    },
    projects: {
      types: [
        {
          title: String,
          description: String,
          githubUrl: String,
          liveUrl: String,
          techStack: [String],
        },
      ],
      default: [],
    },
    skills: {
      type: [String],
      default: [],
    },
    certifications: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

const ResumeModel = mongoose.model("Resume", resumeSchema);

export default ResumeModel;
