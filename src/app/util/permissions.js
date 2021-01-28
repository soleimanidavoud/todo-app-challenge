const permissions = {
  ToDo: ["InProgress"],
  InProgress: ["Blocked", "InQA"],
  Blocked: ["ToDo"],
  InQA: ["ToDo", "Done"],
  Done: ["Deployed"],
  Deployed: [],
};
export default permissions;
