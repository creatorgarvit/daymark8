import { createFileRoute } from "@tanstack/react-router";
import { PlannerProvider } from "@/lib/planner-store";
import { PlannerApp } from "@/components/planner/PlannerApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daymark — Daily planner, revision & reminders" },
      {
        name: "description",
        content:
          "Plan every day on a calendar, tick off tasks, carry unfinished ones to tomorrow and get reminders. For students, entrepreneurs and professionals.",
      },
      { property: "og:title", content: "Daymark — Daily planner, revision & reminders" },
      {
        property: "og:description",
        content: "Never forget what today is for. Tasks, revision plans, carry-over and reminders in one notebook.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PlannerProvider>
      <PlannerApp />
    </PlannerProvider>
  );
}
