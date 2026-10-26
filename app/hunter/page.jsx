"use client";

import { useApp } from "../../components/client-shell";
import JobFinderPanel from "../../components/job-finder-panel";

export default function HunterPage() {
  const { language } = useApp();
  return <JobFinderPanel language={language} />;
}
