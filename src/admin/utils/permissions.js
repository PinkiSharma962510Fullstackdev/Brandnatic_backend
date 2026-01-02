export const can = (user, module, action) => {
  if (!user) return false;
  if (user.role === "superadmin") return true;
  return user.permissions?.[module]?.[action];
};
