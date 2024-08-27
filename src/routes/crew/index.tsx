import { createFileRoute, Link } from "@tanstack/react-router";
import { getCrew } from "../../api/crew";

export const Route = createFileRoute("/crew/")({
  loader: getCrew,
  component: CrewPage,
  pendingComponent: () => <div>Loading...</div>,
});

function CrewPage() {
  const crew = Route.useLoaderData();

  return (
    <>
      <ul>
        {crew.map((member) => (
          <li key={member.id}>
            <Link
              to="/crew/$id"
              params={{ id: member.id }}
              className="hover:underline"
            >
              {member.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
