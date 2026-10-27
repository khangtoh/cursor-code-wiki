export const REPOS: readonly string[] = ["khangtoh/getintro"];

export function watches(fullName: string): boolean {
  return REPOS.some((repo) => repo.toLowerCase() === fullName.toLowerCase());
}
