import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { getCrewMember } from "../../api/crew";

export const Route = createFileRoute("/crew/$id")({
  loader: ({ params }) => getCrewMember(params.id),
  component: CrewMemberPage,
  pendingComponent: CrewMemberPendingPage,
  errorComponent: CrewMemberErrorPage,
});

function CrewMemberPendingPage() {
  const { id } = Route.useParams();
  return (
    <div>
      Loading Crew Member <strong>{id}</strong>...
    </div>
  );
}

function CrewMemberErrorPage() {
  const { id } = Route.useParams();

  return (
    <div>
      Failed to load <strong>{id}</strong>!
    </div>
  );
}

function CrewMemberPage() {
  const member = Route.useLoaderData();

  return (
    <div>
      Hello, {member.name}
      <div className="border p-1 w-36 mt-1">
        <Link
          to="/crew/$id/detail"
          params={{ id: member.id }}
          className="hover:underline"
        >
          {({ isActive }) => (!isActive ? "View Details" : null)}
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
