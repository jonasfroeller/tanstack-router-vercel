const crew = [
  {
    id: "jdoe",
    name: "John Doe",
    age: 30,
  },
  {
    id: "rroe",
    name: "Jane Roe",
    age: 25,
  },
  {
    id: "bsmith",
    name: "Bob Smith",
    age: 40,
  },
  {
    id: "jbloggs",
    name: "Joe Bloggs",
    age: 32,
  },
];

export async function getCrewMember(id: string) {
  await sleep(1000);
  const member = crew.find((member) => member.id === id);
  if (!member) {
    throw new Error("Crew member not found");
  }
  return member;
}

export async function getCrew() {
  await sleep();
  return crew;
}

async function sleep(amount: number = 200) {
  await new Promise((resolve) => setTimeout(resolve, amount));
}
