import { Affiliation, Project, ProjectType } from './types';

export const PERSONAL_INFO = {
  name: "Matin Daghyani",
  title: "M.A.Sc. Student in Electrical & Computer Engineering",
  institution: "University of British Columbia",
  // Email is obfuscated to protect against spam bots
  // Use decodeEmail() from utils.ts to decode it
  email: "zngva.qntulnav@rpr.hop.pn", // Encoded: matin.daghyani@ece.ubc.ca
  location: "Vancouver, Canada",
  linkedin: "https://www.linkedin.com/in/matindaghyani",
  github: "https://github.com/matindaghyani",
  bio: `I am a Master of Applied Science student in Electrical and Computer Engineering at The University of British Columbia (UBC), supervised by Prof. Purang Abolmaesumi. My research focuses on developing Agentic AI and vision-language models for advanced diagnostic insights. I specifically leverage these systems for robust analysis of echocardiographic videos and reports, enabling precise visual reasoning to address critical challenges in clinical decision-making.

    Previously, I completed my B.Sc. in Computer Engineering at Sharif University of Technology, with foundational experience in Computer Vision, Deep Learning, and Generative AI.`
};

const LOGOS = {
  UBC: "/assets/ubc-logo.png",
  INSAIT: "/assets/insait.png",
  EPFL: "/assets/epfl.png",
  SHARIF: "/assets/sharif.jpg"
};

export const AFFILIATIONS: Affiliation[] = [
  {
    institution: "University of British Columbia (UBC)",
    role: "Graduate Research Assistant",
    period: "Sep 2024 – Present",
    location: "Vancouver, Canada",
    logoUrl: LOGOS.UBC
  },
  {
    institution: "INSAIT",
    role: "Research Intern",
    period: "Jul 2023 – Sep 2023",
    location: "Sofia, Bulgaria",
    logoUrl: LOGOS.INSAIT
  },
  {
    institution: "EPFL (VITA Lab)",
    role: "Undergraduate Research Intern",
    period: "Dec 2021 – Aug 2022",
    location: "Remote / Lausanne",
    logoUrl: LOGOS.EPFL
  },
  {
    institution: "Sharif University of Technology",
    role: "B.Sc. in Computer Engineering",
    period: "Sep 2019 – Feb 2024",
    location: "Tehran, Iran",
    logoUrl: LOGOS.SHARIF
  }
];

export const PROJECTS: Project[] = [
  {
    id: "echo-agent",
    type: ProjectType.PUBLICATION,
    title: "EchoAgent: Guideline-Centric Reasoning Agent for Echocardiography Measurement and Interpretation",
    date: "Nov 2025 (Arxiv)",
    affiliation: "University of British Columbia",
    affiliationLogos: [LOGOS.UBC],
    summary: "Current deep learning models struggle with the video-level reasoning required for real-world echocardiography interpretation. To solve this, EchoAgent introduces an agentic framework where a Large Language Model (LLM) orchestrates specialized vision tools for comprehensive analysis. The proposed method enables temporal localization, spatial measurement, and clinical interpretation. The framework ensures guideline-consistent output by explicitly grounding all reasoning and results in visual evidence and clinical standards.",
    imageUrl: "/assets/echoagent_3.png",
    paperUrl: "https://arxiv.org/abs/2511.13948",
    skills: ["LLMs", "Agentic AI", "RAG", "Video Understanding", "Reasoning"],
  },
  {
    id: "pose-forecasting",
    type: ProjectType.PUBLICATION,
    title: "Toward Reliable Human Pose Forecasting with Uncertainty",
    date: "2024 (IEEE RA-L)",
    affiliation: "EPFL & Sharif University",
    affiliationLogos: [LOGOS.EPFL],
    summary: "Addressed uncertainty in human pose prediction by developing a novel method for uncertainty evaluation. This work provides a robust framework for forecasting human motion while quantifying confidence, essential for safety-critical applications like autonomous driving.",
    imageUrl: "/assets/uncertainty.png",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10461031",
    githubUrl: "https://github.com/vita-epfl/unposed",
    skills: ["Computer Vision", "Uncertainty Estimation", "PyTorch", "GNNs"],
  },
  {
    id: "tracing-thoughts",
    type: ProjectType.PROJECT,
    title: "Tracing Thought Processes in Large Language Models: A Tree-Based Approach",
    date: "2025",
    affiliation: "University of British Columbia",
    affiliationLogos: [LOGOS.UBC],
    summary: "Investigated the reasoning behavior of DeepSeek models using a subset of the AI2 Reasoning Challenge. We extracted reasoning trees from model attention to understand how intermediate steps contribute to final predictions, revealing consistent attention patterns across inputs.",
    imageUrl: "/assets/tree.png",
    paperUrl: "/assets/tree.pdf",
    githubUrl: "https://github.com/matindaghyani/Reasoning-Tree",
    skills: ["LLM Interpretability", "Attention Mechanism", "transformers🤗",],
  },
  {
    id: "vlm-echo",
    type: ProjectType.PROJECT,
    title: "Vision-Language Models for Interpretation and Classification of Echocardiographic Views",
    date: "2025",
    affiliation: "University of British Columbia",
    affiliationLogos: [LOGOS.UBC],
    summary: "Proposed a novel approach leveraging reinforcement learning and a clinically-informed reward model to align a pre-trained VLM. The model generates detailed reasoning and step-by-step justifications for view classification, enhancing interpretability in AI-assisted diagnostics.",
    imageUrl: "/assets/model-framework.png",
    paperUrl: "/assets/view.pdf",
    githubUrl: "https://github.com/matindaghyani/gmm-for-view-classification",
    skills: ["VLMs", "Reinforcement Learning", "Echo Classification", "LoRA"],
  },
  {
    id: "diffusion-mvs",
    type: ProjectType.PROJECT,
    title: "Locally Trained Diffusion Models for Multi-view Stereo",
    date: "Sep 2023",
    affiliation: "INSAIT",
    affiliationLogos: [LOGOS.INSAIT],
    summary: "Investigated the behavior of diffusion models trained on a few number of images. Showed that careful training from scratch on sparse views allows for novel view reconstruction and fixing corrupted NeRF rendered images. Applied to super-resolution and depth estimation tasks.",
    imageUrl: "/assets/diffusion.png",
    skills: ["Diffusion Models", "NeRF", "3D Reconstruction", "Generative AI"],
  }
];