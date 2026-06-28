"use client";

import { useEffect } from "react";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

const APP_ID = "lnf3b2/regression-automations";

export function LogRocketProvider() {
  useEffect(() => {
    LogRocket.init(APP_ID, {
      mergeIframes: true,
      release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
    });
    setupLogRocketReact();
  }, []);

  return null;
}
