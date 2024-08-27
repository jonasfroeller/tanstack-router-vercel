import { createFileRoute, getRouteApi, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/crew/$id/detail")({
  component: CrewMemberDetailsPage,
});

function CrewMemberDetailsPage() {
  const member = getRouteApi("/crew/$id").useLoaderData();

  return (
    <div>
      <div>Age: {member.age}</div>
      <Link to=".." className="hover:underline">
        Close
      </Link>
    </div>
  );
}
