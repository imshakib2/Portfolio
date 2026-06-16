/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Profile, SkillCategory, Project, Experience, Education, Certification } from './types';

export const profile = {
  name: "Md. Shakib Hossen",
  brandName: "Shakib Hossen",
  title: "Data Analyst",
  secondaryTitle: "Data Science Student",
  headline: "Data Analyst | Data Science Student",
  tagline: "Turning Raw Data into Meaningful Insights",
  shortTagline: "Turning Data into Decisions",
  location: "Dhaka, Bangladesh (Open to Remote Opportunities)",
  email: "ssd808292@gmail.com",
  phone: "+880 1572-905386",
  linkedin: "linkedin.com/in/imshakib0000",
  github: "github.com/imshakib2",
  summary: "I am a Data Analyst and Software Engineering student specializing in Data Science at Daffodil International University. I am passionate about transforming raw data into meaningful insights through data analysis, visualization, and dashboard development. My interests include business intelligence, data-driven decision-making, and machine learning. I enjoy working with Excel, Power BI, SQL, and Python to solve real-world problems and create impactful analytical solutions."
};

export const education: Education[] = [
  {
    institution: "Daffodil International University",
    location: "Daffodil Smart City, Ashulia, Savar, Dhaka, Bangladesh",
    degree: "B.Sc. in Software Engineering (SWE)",
    major: "Data Science",
    gpa: "3.60 / 4.00",
    period: "Expected Graduation: 2026"
  },
  {
    institution: "Higher Secondary Certificate (HSC)",
    location: "Jessore Board, Bangladesh",
    degree: "Science Group",
    gpa: "5.00",
    period: "Passing Year: 2021"
  },
  {
    institution: "Secondary School Certificate (SSC)",
    location: "Jessore Board, Bangladesh",
    degree: "Science Group",
    gpa: "4.78",
    period: "Passing Year: 2019"
  }
];

export const certifications: Certification[] = [
  {
    title: "AWS Academy Graduate – Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "Issued: August 2025",
    duration: "Course Duration: 20 Hours",
    credentialUrl: "https://www.credly.com/go/A6UDxhrr"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Data Analytics & Reporting",
    iconName: "TrendingUp",
    skills: ["Data Analysis", "Data Cleaning", "Data Visualization", "KPI Analysis", "Business Reporting"]
  },
  {
    category: "Microsoft Excel",
    iconName: "FileSpreadsheet",
    skills: ["Pivot Tables", "XLOOKUP/VLOOKUP", "Charts & Dashboards", "Power Query"]
  },
  {
    category: "Power BI",
    iconName: "BarChart3",
    skills: ["Dashboards", "DAX Basics", "Report Automation", "Power Query"]
  },
  {
    category: "SQL & Programming",
    iconName: "Database",
    skills: ["SELECT", "WHERE", "GROUP BY", "JOINs", "Aggregations", "Python (Pandas, NumPy)", "C Programming"]
  }
];

export const projects: Project[] = [
  {
    id: "dengue-prediction-thesis",
    title: "B.Sc. Thesis: Enhancing Dengue Outbreak Prediction",
    description: "Developed an ML-driven dengue prediction framework by integrating weather data, Google Search Trends, and historical dengue cases to improve outbreak forecasting and risk assessment.",
    tools: ["Python", "Machine Learning", "Pandas & NumPy", "Scikit-Learn", "Data Integration"],
    achievements: [
      "Synthesized multi-source variables including temperature, rainfall, humidity, and Google Search Trends.",
      "Engineered data pipelines to align historical dengue counts with disjoint meteorological series.",
      "Trained predictive algorithms to enhance forecast precision and epidemic risk mitigation."
    ],
    githubUrl: "https://github.com/imshakib2"
  },
  {
    id: "sales-analysis",
    title: "Sales Performance Dashboard",
    description: "Developed an interactive Power BI dashboard tracking sales and revenue metrics. Formulated clean data transformations to visualize regional growth and identify key seasonal performance drivers.",
    tools: ["Power BI", "Power Query", "DAX Basics", "Excel"],
    achievements: [
      "Designed dynamic calendar filters and consolidated records into a unified dashboard visualization.",
      "Formulated basic DAX measures to calculate Year-over-Year (YoY) revenue and sales variances.",
      "Prepared streamlined visualization screens to support interactive exploration of business metrics."
    ],
    githubUrl: "https://github.com/imshakib2"
  },
  {
    id: "customer-churn",
    title: "Customer Segmentation Analysis",
    description: "Conducted RFM customer segmentation and exploration using Microsoft Excel pivot tables and formulas. Grouped customers to isolate valuable support demographics and improve campaign targeting.",
    tools: ["Excel Pivot Tables", "XLOOKUP/VLOOKUP", "Conditional Formatting", "Power Query"],
    achievements: [
      "Scrubbed raw client purchase sheets to isolate missing transaction entries and clean anomalies.",
      "Configured customer metrics to calculate spend ranges and cluster groups into Recency and Frequency dimensions.",
      "Formatted dynamic charts indicating key segment distributions for easy presentations."
    ],
    githubUrl: "https://github.com/imshakib2"
  },
  {
    id: "business-operational-audit",
    title: "E-Commerce Sales Analysis",
    description: "Engineered database exploration scripts using SQL to parse sales logs. Modeled relational query joints to establish essential KPIs and analyze active product margins.",
    tools: ["SQL", "SELECT/JOINs", "Aggregations", "GROUP BY", "Python (Pandas)"],
    achievements: [
      "Wrote structured SELECT query sequences featuring multiple JOIN conditions and GROUP BY aggregations.",
      "Uncovered highest-performing product sub-categories and localized order processing peaks.",
      "Exported cleaned data queries to support visual reports and reduce transaction audit time."
    ],
    githubUrl: "https://github.com/imshakib2"
  }
];

export const experiences: Experience[] = [
  {
    id: "proj-exp",
    role: "Applied Data Analysis",
    company: "Academic & Personal Projects",
    period: "Ongoing",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Applied data analysis techniques through academic and personal projects involving Excel, Power BI, SQL, and Python.",
      "Built dashboards, cleaned datasets, performed exploratory data analysis, and generated business insights from structured datasets."
    ]
  }
];
