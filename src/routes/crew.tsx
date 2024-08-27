import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/crew")({
  component: () => (
    <div>
      <div className="text-lg mb-2">Meet our crew</div>
      <hr className="my-2" />
      <Outlet />
    </div>
  ),
});
