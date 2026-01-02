import { getUser } from "../utils/auth";
import { can } from "../utils/permissions";

 function PermissionGate({ module, action, children }) {
  const user = getUser();
  return can(user, module, action) ? children : null;
}

export default PermissionGate;