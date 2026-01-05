# Security Updates - CVE Patches

## Critical Vulnerabilities Fixed

### CVE-2025-55182 (React2Shell) and CVE-2025-66478
- **CVSS Score:** 10.0 (Critical)
- **Type:** Remote Code Execution (RCE) via React Server Components
- **Affected Versions:**
  - React: 19.0.0, 19.1.0, 19.1.1, 19.2.0
  - Next.js: 15.x, 16.x (unpatched versions)

### CVE-2025-55184 (High Severity)
- **CVSS Score:** High
- **Type:** Denial of Service (DoS) vulnerability
- **Description:** Specially crafted HTTP request can cause server to hang, leading to high CPU usage and unresponsiveness
- **Affected Versions:** Next.js 13.x through 16.x (App Router)
- **Fixed in:** Next.js 16.0.10+

### CVE-2025-55183 (Medium Severity)
- **CVSS Score:** Medium
- **Type:** Source Code Exposure vulnerability
- **Description:** Crafted HTTP request can cause Server Function to return compiled source code of other Server Functions, potentially exposing business logic and secrets
- **Affected Versions:** Next.js 13.x through 16.x (App Router)
- **Fixed in:** Next.js 16.0.10+

## Updated Dependencies

### React
- **Previous:** 19.2.3 (vulnerable)
- **Updated to:** ^19.2.1 (patched)
- **CVE Status:** ✅ Patched

### React DOM
- **Previous:** 19.2.3 (vulnerable)
- **Updated to:** ^19.2.1 (patched)
- **CVE Status:** ✅ Patched

### Next.js
- **Previous:** 19.2.3 (non-existent version causing build failures) → 16.0.7
- **Updated to:** ^16.1.0 (patches CVE-2025-55184, CVE-2025-55183, CVE-2025-66478)
- **CVE Status:** ✅ Patched (all CVEs)

### ESLint Config Next
- **Updated to:** ^16.1.0 (aligned with Next.js version)

## Action Required

1. **Install Updated Dependencies:**
   ```bash
   rm -f package-lock.json
   npm install
   ```

2. **Rotate Secrets (if application was online before patching):**
   - If your application was online and unpatched as of December 4, 2025, rotate all secrets
   - Start with the most critical secrets first

3. **Rebuild Docker Container:**
   ```bash
   docker-compose build --no-cache
   docker-compose up
   ```

## References

- [Next.js CVE-2025-66478 Advisory](https://nextjs.org/blog/CVE-2025-66478)
- [Next.js Security Update 2025-12-11 (CVE-2025-55184, CVE-2025-55183)](https://nextjs.org/blog/security-update-2025-12-11)
- [Next.js 16.1 Release Notes](https://nextjs.org/blog/next-16-1)
- [React Security Updates](https://react.dev/blog)

