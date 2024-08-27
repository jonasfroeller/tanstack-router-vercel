import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const activeProps = { style: { fontWeight: "bold" } };

export const Route = createRootRoute({
  component: () => (
    <div className="px-4 py-2 flex flex-col gap-4">
      <div className="text-3xl">My cool application</div>
      <div className="flex gap-2">
        <Link to="/" activeProps={activeProps}>
          Home
        </Link>
        <Link
          to="/dashboard"
          search={{ showSpeed: true }}
          activeProps={activeProps}
        >
          Dashboard
        </Link>
        <Link to="/crew" activeProps={activeProps}>
          Crew
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
